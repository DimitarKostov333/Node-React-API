require('dotenv').config();

module.exports.ENV_VARS = {
    APP_NAME: process.env.APP_NAME,
    DB_URL: process.env.BASE_URL,
    PORT: process.env.PORT,
};

module.exports.STATUS_CODES = {
    SUCCESSFUL: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_ERROR: 500,
};