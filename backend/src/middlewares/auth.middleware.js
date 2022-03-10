const passport = require('passport');

function localAuth(req, res, next) {
  passport.authenticate('local', { session: false }, (error, user, info) => {
    if (error && error.name === 'InvalidArgumentError') {
      return res.status(401).json({ error: error.message });
    }

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    if (!user) {
      return res
        .status(401)
        .json({ error: 'requisição vazia ou mal formatada' });
    }

    req.user = user;
    return next();
  })(req, res, next);
}

function bearerAuth(req, res, next) {
  passport.authenticate('bearer', { session: false }, (error, user, info) => {
    if (error && error.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: error.message });
    }

    if (error && error.name === 'TokenExpiredError') {
      return res
        .status(401)
        .json({ error: error.message, expiredAt: error.expiredAt });
    }

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    if (!user) {
      return res
        .status(401)
        .json({ error: 'requisição vazia ou mal formatada' });
    }

    req.token = info.token;
    req.user = user;
    return next();
  })(req, res, next);
}

module.exports = { localAuth, bearerAuth };
