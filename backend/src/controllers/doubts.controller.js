const DoubtsRepository = require('../repositories/doubts.repository');

class DoubtController {
  async index (req, res, next) {
    res.json({ status: 'Endpoint available', endpoint: '/duvidas/' });
  }

  async create (req, res, next) {
    const { title } = req.body;

    try {
      await DoubtsRepository.create({ title });

      return res
        .status(201)
        .json({ message: 'Doubt has been created' });
    } catch (e) {
      return res
        .status(400)
        .json({ 
          message: 'An unexpected error during creating doubt',
          log: '`${e}`'
        });
    }
  }
}

module.exports = new DoubtController;
