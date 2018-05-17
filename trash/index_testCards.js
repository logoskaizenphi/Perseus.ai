
          'use strict';
let http = require('http');
let starWarsAPI = `www.swapi.co`;
var AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
 
exports.handler = function(event, context, callback) {
  //v2 change to queryResult
  let firstName = event.queryResult.parameters['given-name'];
  let lastName = event.queryResult.parameters['last-name'];
  //v2change to
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
    }, 








    function(err, data) {
        if (err) {
            console.log('Error putting item into dynamodb failed: '+err);
            context.done('error');
        }
            else {
            console.log('great success: '+JSON.stringify(data, null, '  '));



let cbdata = ("test1");


console.log(JSON.stringify(cbdata));


            callback(null,{"fulfillmentText": "this text is displayed visually",
                             "payload": {
                               //example facebook messenger response, you can only have one response type (quick reply, audio, card) per facebook payload
                                "facebook": {
   
    //simple facebook text response example                            
   //"text": "Hello, perseus you fucking epic stud you!"
   //,
    
    //simpe facebook audio response example
    // "attachment": {
    //   "type": "audio",
    //   "payload": {
    //     "url": "https://ia802508.us.archive.org/5/items/testmp3testfile/mpthreetest.mp3"
    //   }
    // }


    //simple facebook quick reply text w/color example
     "text": "What do you think?",
         "quick_replies": [
            {
               "content_type": "text",
               "title": "Short",
               "payload": "red"
            },
            {
               "content_type": "text",
               "title": "Tall",
               "payload": "green"
            }
         ]

          //end facebook text quick reply example

    }
  }});
         


          context.done('success perseus!');
        }
    });
};
              //callback request for dialogFlow V2 Api
              

/*

 {
  "fulfillmentMessages": [
    {
      "platform": "FACEBOOK",
      "card": {
        "title": "Title: this is a title",
        "subtitle": "This is an subtitle.  Text can include unicode characters including",
        "imageUri": "https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png",
        "buttons": [
          {
            "text": "This is a button",
            "postback": "https://assistant.google.com/"
          }
        ]
      }
       ]
}

*/