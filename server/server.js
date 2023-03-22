const express = require('express');
const http = require('http');
const app = express();
const cors = require('cors');

const server = http.createServer(app);
const port = 3000;
require('dotenv').config();

app.get('/projects', async (req, res, next) => {
    console.log("HIiiii");
})
server.listen(port, () => console.log("Listening on port: " + port));