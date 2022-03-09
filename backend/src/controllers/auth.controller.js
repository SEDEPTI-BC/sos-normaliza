const jwt = require('jsonwebtoken');

function createTokenJWT(user) {
  const payload = {
    id: user.id,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET_PASSWORD);

  return token;
}

class AuthController {
  static async login(req, res) {
    const token = createTokenJWT(req.user);

    // returns token in response headers, specifically the Authorization header
    res.set('Authorization', token);
    return res.status(204).json({ msg: 'usuário logado com sucesso' });
  }
}

module.exports = AuthController;
