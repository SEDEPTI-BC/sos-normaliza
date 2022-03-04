const TimeRepository = require('../repositories/time.repository');

class TimeController {
  async index (req, res, next) {
    res.json({ status: 'Endpoint available', endpoint: '/horarios/' });
  }

  async create (req, res, next) {
    const { hour } = request.body;

    try {
      await TimeRepository.create({ hour });

      return res
        .status(201)
        .json({ message: 'Hour registered in database'});
    } catch (e) {
      return res
        .status(400)
        .json({
          message: 'An unexpected error occurred during registry hour',
          log: '`${e}`'
        });
    }
  }
}

module.exports = new TimeController;
