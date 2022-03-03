const { app_port } = require('./config/vars');
const app = require('./config/server');
const connection = require('./database/connection');

app.listen(app_port, () => {
  try  {
    console.log(`Server running on port ${app_port}`);
  } catch (e) {
    console.error(`Unexpected error. ${e}`);
  }
})

module.exports = app;
