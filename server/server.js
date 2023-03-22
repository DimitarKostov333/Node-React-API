const {ENV_VARS} = require('./config');
const express = require('express');
const {ProjectsAPI} = require('./api/project');
const cors  = require('cors');

const StartServer = async () => {
    const app = express();
    app.use(cors());

    ProjectsAPI(app);

    app.listen(ENV_VARS.PORT, () => {
        console.log(`Listening on port: ${ENV_VARS.PORT}`);
    }).on('error', (err) => {
        console.log(err);
        process.exit();
    })
}

StartServer();