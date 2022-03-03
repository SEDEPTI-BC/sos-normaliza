class Time {
  async index (req, res, next) {
    res.send('Horários');
  }
}

module.exports = new Time;
