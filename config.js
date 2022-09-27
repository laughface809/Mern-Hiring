require("dotenv").config();
const DB_SERVER = process.env.DB_SERVER || "localhost";
const DB_PORT = process.env.DB_PORT || "27017";
const CONNECTION_STRING = `mongodb://${DB_SERVER}:${DB_PORT}`;
const DBNAME = "hiring";

const SENDER_HOST = process.env.SENDER_HOST;
const SENDER_PORT = process.env.SENDER_PORT;
const SENDER_ADDRESS = process.env.SENDER_ADDRESS;
const SENDER_NAME = process.env.SENDER_NAME;
const SENDER_PASSWORD = process.env.SENDER_PASSWORD;

module.exports = {
    CONNECTION_STRING,
    DBNAME,
    SENDER_HOST,
    SENDER_PORT,
    SENDER_NAME,
    SENDER_ADDRESS,
    SENDER_PASSWORD
}