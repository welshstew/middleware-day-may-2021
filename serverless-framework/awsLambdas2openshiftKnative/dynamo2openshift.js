'use strict';

module.exports.openshift = async (event) => {

    var AWS = require('aws-sdk');

    if(event.Records) {
        console.log('DYNAMODB EVENT!');
        console.log('Item has ' + event.Records.length + ' records!');

        for(var i=0; i < event.Records.length; i++){
            var unmarshalled = AWS.DynamoDB.Converter.unmarshall(event.Records[i].dynamodb.NewImage);
            console.log(unmarshalled);
            var tutorial = {
                title: unmarshalled.title,
                description: unmarshalled.description,
                published: unmarshalled.published
            };

            await sendPostRequest(tutorial);

        }
  
    return {
        statusCode: 200,
        body: JSON.stringify(
        {
            message: 'OK',
            input: event
        },
        null,
        2
        ),
    };

}
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

const sendPostRequest = async (tutorial) => {
    const axios = require('axios').default;
    try {
        const resp = await axios.post(process.env['OPENSHIFT_ENDPOINT_URL'], tutorial);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}; 
