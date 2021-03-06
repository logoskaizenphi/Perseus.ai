const http = require('http');
const AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });
const createWebhookCallback = require('./createWebhookCallback');
const userContext = require('./userContext/userContext');

class PersistData {
	constructor(event) {
		this.event = event;
	}

	persistdata(callback, context) {
		const event = this.event;

		let responseId = event['responseId'];

		let requestData = JSON.stringify(event);

		//call callback class
		const cbdatacreate = new createWebhookCallback(event); // succeeds
		const cbdata = cbdatacreate.createDialogflowWebhookCallback(event);
		console.log(cbdata);

		//sut Dialogflow Context to DynamoDB
		const usercontext = new userContext(event); // succeeds
		const setUserContext = usercontext.setUserContext(event);

		//console.log('Name '+ firstName +' ' + lastName+'    sessionid:'+responseId);

		// console.log(JSON.stringify(event, null, '  '));
		try {
			var tableName = 'DialogflowWebhookData';

			dynamodb.putItem(
				{
					TableName: tableName,

					Item: {
						// "firstname": {S: firstName},

						responseId: { S: responseId },
						responseData: { S: JSON.stringify(cbdata) },
						requestData: { S: requestData },
						date: { S: Date.now().toString() },

						//"lastname": {S: lastName}
					},
				},
				function(err, data) {
					if (err) {
						console.log('Error putting item into dynamodb failed: ' + err);

						context.done('error');
					} else {
						console.log('great success: ' + JSON.stringify(data, null, '  '));

						//callback request for dialogFlow V2 Api

						callback(null, cbdata);

						context.done('success perseus2!');
					}
				}
			);
		} catch (error) {}
	}
}

// now we export the class, so other modules can create Cat objects
module.exports = PersistData;
