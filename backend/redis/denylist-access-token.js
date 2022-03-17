const jwt = require('jsonwebtoken');
const redis = require('redis');
const handleList = require('./handle-list');

const denylist = redis.createClient();

const { createHash } = require('crypto');

const handleDenylist = handleList(denylist);

function hashToken(token) {
  return createHash('sha256').update(token).digest('hex');
}

module.exports = {
  async add(token) {
    const expirationDate = jwt.decode(token).exp;

    // shorten token for performance
    const hashedToken = hashToken(token);

    await handleDenylist.add(hashedToken, '', expirationDate);
  },
  async hasToken(token) {
    const hashedToken = hashToken(token);

    return handleDenylist.hasKey(hashedToken);
  },
  async connect() {
    await handleDenylist.connect();
  },
};
