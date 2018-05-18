class daytimeapproachIntentCallback {
	//can pass just the intent and action instead of entire repsonse object. parse in main
	constructor(event) {
		this.event = event;
	}

	createdaytimeapproachIntentCallback(event) {
		let IntentProvided = event.queryResult.intent['displayName'];

		console.log(IntentProvided);

		if (IntentProvided.toString() === 'Daytime Approach') {
			let cbdata = {
				fulfillmentText: 'Now your talking son. Way to grow a pair... Now lets go',
				fulfillmentMessages: [
					{
						quickReplies: {
							title: 'Give me some logistics',
							quickReplies: ['street', 'coffee shop', 'groccery store', 'event'],
						},
						platform: 'SLACK',
					},
					{
						text: {
							text: [''],
						},
					},
				],
			};

			return cbdata;
		} else {
			let cbdata = { fulfillmentText: 'I didnt pick up your intent' };
			return cbdata;
		}
	}
}
module.exports = daytimeapproachIntentCallback;
