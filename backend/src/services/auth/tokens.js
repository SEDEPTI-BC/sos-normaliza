const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const moment = require('moment');

const { InvalidArgumentError } = require('../../utils/errors');

const allowlistRefreshToken = require('../../../redis/allowlist-refresh-token');
const denylistAccessToken = require('../../../redis/denylist-access-token');

function createTokenJWT(id, [expirationTime, expirationTimeUnity]) {
  const payload = { id };

  const token = jwt.sign(payload, process.env.JWT_SECRET_PASSWORD, {
    expiresIn: expirationTime + expirationTimeUnity,
  });

  return token;
}

async function verifyTokenJWT(token, denylist) {
  await verifyIfTokenInDenylistAccessToken(token, denylist);
  const { id } = jwt.verify(token, process.env.JWT_SECRET_PASSWORD);
  return id;
}

async function verifyIfTokenInDenylistAccessToken(token, denylist) {
  const tokenInDenylistAccessToken = await denylist.hasToken(token);

  if (tokenInDenylistAccessToken) {
    throw new jwt.JsonWebTokenError('Access token invalidado por logout');
  }
}

async function invalidateTokenJWT(token, denylist) {
  return await denylist.add(token);
}

async function createOpaqueToken(
  id,
  [expirationTime, expirationTimeUnity],
  allowlist
) {
  const opaqueToken = crypto.randomBytes(24).toString('hex');
  const expirationDate = moment()
    .add(expirationTime, expirationTimeUnity)
    .unix();
  await allowlist.add(opaqueToken, id, expirationDate);

  return opaqueToken;
}

async function verifyOpaqueToken(token, allowlist) {
  if (!token) {
    throw new InvalidArgumentError('Refresh token não enviado');
  }
  const id = await allowlist.searchValue(token);

  if (!id) {
    throw new InvalidArgumentError('Refresh token inválido');
  }

  return id;
}

// TODO: finish refactoring of this function
// async function invalidateRefreshToken(refreshToken) {
//   await allowlistRefreshToken.delete(refreshToken);
// }

module.exports = {
  access: {
    denylist: denylistAccessToken,
    expiration: [15, 'm'],
    create(id) {
      return createTokenJWT(id, this.expiration);
    },
    async verify(token) {
      return await verifyTokenJWT(token, this.denylist);
    },
    invalidate(token) {
      return invalidateTokenJWT(token, this.denylist);
    },
  },
  refresh: {
    allowlist: allowlistRefreshToken,
    expiration: [5, 'd'],
    async create(id) {
      return await createOpaqueToken(id, this.expiration, this.allowlist);
    },
    async verify(token) {
      return await verifyOpaqueToken(token, this.allowlist);
    },
    invalidate(token) {
      return invalidateOpaqueToken(token);
    },
  },
};
