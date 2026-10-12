const { Pool } = require("pg");

module.exports = new Pool({
  host: process.env.host || "localhost",
  database: process.env.database || "messageboard",
  user: process.env.user || "user",
  password: process.env.password || "password",
  port: process.env.port || 5432,
});
