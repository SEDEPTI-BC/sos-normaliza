const tokens = require('../services/auth/tokens');

class AuthController {
  static async login(req, res) {
    try {
      const accessToken = tokens.access.create(req.user.id);
      const refreshToken = await tokens.refresh.create(req.user.id);

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
      await tokens.access.invalidate(token);

      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = AuthController;
