const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const moment = require('moment');
const denylistAccessToken = require('../../redis/denylist-access-token');
const allowlistRefreshToken = require('../../redis/allowlist-refresh-token');

function createTokenJWT(user) {
  const payload = {
    id: user.id,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET_PASSWORD, {
    expiresIn: '15m',
  });

  return token;
}

/**
 * Função para gerar um refresh token
 *
 * @returns string de numeros hexadecimais aleatórios
 */
async function createOpaqueToken(user) {
  const opaqueToken = crypto.randomBytes(24).toString('hex');
  const expirationDate = moment().add('5', 'd').unix();
  await allowlistRefreshToken.add(opaqueToken, user.id, expirationDate);

  return opaqueToken;
}

class AuthController {
  static async login(req, res) {
    try {
      const accessToken = createTokenJWT(req.user);
      const refreshToken = await createOpaqueToken(req.user);

      // returns token in response headers, specifically the Authorization header
      res.set('Authorization', accessToken);
      return res.status(200).json({ refreshToken });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async logout(req, res) {
    try {
      const token = req.token;
      await denylistAccessToken.add(token);

      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = AuthController;
