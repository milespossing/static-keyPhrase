const { TextAnalyticsClient, AzureKeyCredential } = require("@azure/ai-text-analytics");

async function keyPhraseExtraction(client, input){

    const keyPhrasesInput = [ input ];
    const keyPhraseResult = await client.extractKeyPhrases(keyPhrasesInput);
    
    return keyPhraseResult[0];
}

module.exports = async function (context, req) {
    const key = process.env.cogCred;
    const endpoint = process.env.cogEnd;
    const textAnalyticsClient = new TextAnalyticsClient(endpoint,  new AzureKeyCredential(key));

    const result = await keyPhraseExtraction(textAnalyticsClient, req.body);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: result,
    };
}