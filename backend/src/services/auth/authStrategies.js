const { InvalidArgumentError } = require('../../utils/errors');
const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const UserRepository = require('../../repositories/user.repository');
const tokens = require('../../services/auth/tokens');

function verifyUser(user) {
  if (!user) {
    throw new InvalidArgumentError(
      'não foi possivel encontrar um usuário com o e-mail especificado'
    );
  }
}

async function verifyPassword(password, hashedPassword) {
  const validPassword = await bcrypt.compare(password, hashedPassword);
  if (!validPassword) {
    throw new InvalidArgumentError('e-mail ou senha inválidos');
  }
}

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: false,
    },
    async (email, password, done) => {
      try {
        const user = await UserRepository.getUserByEmail(email);
        verifyUser(user);
        await verifyPassword(password, user.password);

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  new BearerStrategy(async (token, done) => {
    try {
      const id = await tokens.access.verify(token);
      const user = await UserRepository.getUserById(+id);
      return done(null, user, { token });
    } catch (error) {
      return done(error);
    }
  })
);

module.exports = passport;
