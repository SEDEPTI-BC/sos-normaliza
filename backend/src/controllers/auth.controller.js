const jwt = require('jsonwebtoken');
const blacklist = require('../../redis/handle-blacklist');

function createTokenJWT(user) {
  const payload = {
    id: user.id,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET_PASSWORD, {
    expiresIn: '15m',
  });

  return token;
}

class AuthController {
  static async login(req, res) {
    const token = createTokenJWT(req.user);

    // returns token in response headers, specifically the Authorization header
    res.set('Authorization', token);
    return res.status(204).json({ msg: 'usuário logado com sucesso' });
  }

  static async logout(req, res) {
    try {
      const token = req.token;
      await blacklist.add(token);

      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = AuthController;
