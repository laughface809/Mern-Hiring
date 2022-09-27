require("dotenv").config();
const CONNECTION_STRING = process.env.MONGO_STRING;

const SENDER_HOST = process.env.SENDER_HOST;
const SENDER_PORT = process.env.SENDER_PORT;
const SENDER_ADDRESS = process.env.SENDER_ADDRESS;
const SENDER_NAME = process.env.SENDER_NAME;
const SENDER_PASSWORD = process.env.SENDER_PASSWORD;

module.exports = {
    CONNECTION_STRING,
    SENDER_HOST,
    SENDER_PORT,
    SENDER_NAME,
    SENDER_ADDRESS,
    SENDER_PASSWORD
}