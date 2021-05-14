'use strict';

module.exports.insert = async (event) => {

  var AWS = require('aws-sdk');
  var randomWords = require('random-words');
  const { v4: uuidv4 } = require('uuid');
  var title = randomWords({ exactly: 4, join: ' ' });
  var description = randomWords({ exactly: 15, join: ' ' });
  var published = false;

  var randomTutorial = {
    id: uuidv4(),
    title:title,
    description: description,
    published: published
  };

  console.log(randomTutorial);

  var docClient = new AWS.DynamoDB.DocumentClient();

  var params = {
    TableName: process.env['TUTORIALS_TABLENAME'],
    Item: randomTutorial
  };
  var data = await docClient.put(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
        object: randomTutorial
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
