const blacklist = require('./blacklist');
const jwt = require('jsonwebtoken');
const { createHash } = require('crypto');

function hashToken(token) {
  return createHash('sha256').update(token).digest('hex');
}

async function add(token) {
  const expirationDate = jwt.decode(token).exp;

  // shorten token for performance
  const hashedToken = hashToken(token);

  await blacklist.connect();
  await blacklist.set(hashedToken, '');
  await blacklist.expireAt(hashedToken, expirationDate);
}

async function hasToken(token) {
  const hashedToken = hashToken(token);
  const tokenInBlacklist = await blacklist.exists(hashedToken);

  return tokenInBlacklist === 1;
}

module.exports = { add, hasToken };
