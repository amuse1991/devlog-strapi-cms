const parse = require("pg-connection-string").parse;
const config =
  process.env.NODE_ENV === "production"
    ? parse(process.env.DATABASE_URL)
    : parse(process.env.DB_CONNECTION_STRING);

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
});
