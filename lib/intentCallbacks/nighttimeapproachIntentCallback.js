class nighttimeapproachIntentCallback {
	//can pass just the intent and action instead of entire repsonse object. parse in main
	constructor(event) {
		this.event = event;
	}

	createnighttimeapproachIntentCallback(event) {
		let IntentProvided = event.queryResult.intent['displayName'];

		console.log(IntentProvided);

		if (IntentProvided.toString() === 'Nighttime Approach') {
			let cbdata = {
				fulfillmentText: 'Now your talking son. Way to grow a pair... Now lets go and put them fancy pants on!',
				fulfillmentMessages: [
					{
						quickReplies: {
							title: 'Give me some logistics',
							quickReplies: ['bar', 'lounge', 'nightclub', 'street', 'social event', 'store'],
						},
						platform: 'SLACK',
					},
					{
						text: {
							text: ['bar', 'lounge', 'nightclub', 'street', 'social event', 'store'],
						},
					},

					//FACEBOOK Quick reply
					{
						quickReplies: {
							title: 'Give me some logistics',
							quickReplies: ['bar', 'lounge', 'nightclub', 'street', 'social event', 'store'],
						},
						platform: 'FACEBOOK',
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
module.exports = nighttimeapproachIntentCallback;
