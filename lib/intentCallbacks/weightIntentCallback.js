class weightIntentCallback {
	//can pass just the intent and action instead of entire repsonse object. parse in main
	constructor(event) {
		this.event = event;
	}

	createweightIntentCallback(event) {
		let IntentProvided = event.queryResult.intent['displayName'];

		console.log(IntentProvided);

		if (IntentProvided.toString() === 'weight intent') {
			let cbdata = {
				fulfillmentMessages: [
					{
						platform: 'FACEBOOK',

						card: {
							title: 'Title: this is a weight intent title',

							subtitle: 'This is an subtitle.  Text can include unicode characters including emoji 📱.',

							imageUri: 'https://cdn.pitch.com/files/base/scomm/kcp/image/2011/08/960w/manutebol2.jpg',
							//start button array -> limit array to 3 buttons
							buttons: [
								{
									text: 'This is a button',

									postback: 'https://assistant.google.com/',
								},
							],
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
module.exports = weightIntentCallback;
