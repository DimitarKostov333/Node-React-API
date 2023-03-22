const {Filter} = require('../services/filter');
const {STATUS_CODES} = require('../config');
const Data = require('../data/data');
const {FormatData} = require('../services/format-data')
const {isEmpty} = require("underscore");

module.exports.ProjectsAPI = app => {
    app.get('/projects', async (request, response) => {
        let toSearch = FormatData(decodeURI(request.query.searchTerm));
        let result = Filter(Data, toSearch);

        if(Object.keys(request).length === 0){
            response.json(Data);
            return;
        }

        response.json(result);
    })
}
