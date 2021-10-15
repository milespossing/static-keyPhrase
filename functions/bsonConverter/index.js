const bson = require('bson');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const bson = req.body;
    
    const json = bson && JSON.parse(JSON.stringify(bson));
    context.log(json);

    context.res = {
        body: json,
    };
};