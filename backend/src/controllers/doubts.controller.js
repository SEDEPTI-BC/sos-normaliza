class Doubt {
  async index (req, res, next) {
    res.send('Dúvidas');
  }
}

module.exports = new Doubt;
