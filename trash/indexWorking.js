'use strict';
let http = require('http');
let starWarsAPI = `www.swapi.co`;
var AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
 
exports.handler = function(event, context, callback) {
  let firstName = event.queryResult.parameters['given-name'];
  let lastName = event.queryResult.parameters['last-name'];
  let responseId = event['responseId'];
  let eventData = JSON.stringify(event);

 console.log('Name '+ firstName +' ' + lastName+'    sessionid:'+responseId);


// console.log(JSON.stringify(event, null, '  '));
    var tableName = "DialogFlowWebhookResponseData";    
    dynamodb.putItem({
        "TableName": tableName,
        "Item" : {
            // "firstname": {S: firstName},
            "responseId": {S: responseId}   ,
            "responseData": {S: eventData}

            //"lastname": {S: lastName} 
        }
    }, function(err, data) {
        if (err) {
            console.log('Error putting item into dynamodb failed: '+err);
            context.done('error');
        }
        else {
            console.log('great success: '+JSON.stringify(data, null, '  '));
            context.done('Done');
        }
    });


};


/*
 let options = searchPeopleRequestOptions(firstName, lastName);
  
  makeRequest(options, function( data, error) {
    let person = data.queryResult[0];
    if (person) {
        let height = person.height;
        let response = person.name + " is " + height + " centimeters tall.";
        callback(null, {"speech": response});
    }
    else {
        callback(null, {"speech": "I'm not sure!"});
    }
  });
};
 
function searchPeopleRequestOptions(firstName, lastName) {
    return {
        host: starWarsAPI,
        path: `/api/people/?search=`+firstName+'+'+lastName
    };
}
 
function makeRequest(options, callback) {
    var request = http.request(options, 
    function(response) {
        var responseString = '';
        response.on('data', function(data) {
            responseString += data;
        });
         response.on('end', function() {
            var responseJSON = JSON.parse(responseString);
            callback(responseJSON, null);
        });
    });
    request.end();

};
    */

