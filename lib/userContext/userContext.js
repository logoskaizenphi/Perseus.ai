const AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

class userContext {
	constructor(event) {
		this.event = event;
	}

	setUserContext(event) {
		const { responseId, queryResult } = event;
		let userContext = queryResult && queryResult.outputContexts && queryResult.outputContexts[0];
		if (!userContext) {
			console.log('User context is undefined');
			return;
		}

		let parsedUserContextName = userContext && userContext[Object.keys(userContext)[0]];
		if (!parsedUserContextName) {
			console.log('parsed user context is undefined');
			return;
		}

		let contextUserId = userContext && userContext[Object.keys(userContext)[2]];
		if (!contextUserId) {
			console.log('Context UserId is undefined');
			return;
		}

		let parsedcontextUserId = contextUserId && contextUserId[Object.keys(contextUserId)[0]];
		if (!parsedcontextUserId) {
			console.log('parsedContext UserId is undefined');
			return;
		}

		let IntegrationPlatform = event.originalDetectIntentRequest && event.originalDetectIntentRequest['source'];
		if (!IntegrationPlatform) {
			console.log('IntegrationPlatform is undefined');
			return;
		}

		//console.log(userContext + '   ' + contextUserId + '    ' + IntegrationPlatform);

		console.log(userContext);
		try {
			var tableName = 'DialogflowUserContext';

			dynamodb.putItem(
				{
					TableName: tableName,

					Item: {
						responseId: { S: responseId },
						contextDialogflow: { S: parsedUserContextName },
						integrationUserId: { S: parsedcontextUserId },
						integrationPlatform: { S: IntegrationPlatform },
						dateTime: { S: Date.now().toString() },
					},
				},
				function(err, data) {
					if (err) {
						console.log('Error putting context into dynamodb failed: ' + err);
					} else {
						console.log('save context success: ' + JSON.stringify(data, null, '  '));
					}
				}
			);
		} catch (error) {}
	}
}

// now we export the class, so other modules can create Cat objects
module.exports = userContext;
