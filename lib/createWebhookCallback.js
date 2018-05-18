class createWebhookCallback {
	//can pass just the intent and action instead of entire repsonse object. parse in main
	constructor(event) {
		this.event = event;
	}

	createDialogflowWebhookCallback(event) {
		let IntentProvided = event.queryResult.intent['displayName'];

		console.log(IntentProvided);

		if (IntentProvided.toString() === 'height intent') {
			let cbdata = {
				fulfillmentMessages: [
					{
						platform: 'FACEBOOK',

						card: {
							title: 'Title: this is a height intent title',

							subtitle: 'This is an subtitle.  Text can include unicode characters including emoji 📱.',

							imageUri:
								'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
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
		}

		if (IntentProvided.toString() === 'weight intent') {
			let cbdata = {
				fulfillmentMessages: [
					{
						platform: 'FACEBOOK',

						card: {
							title: 'Title: this is a weight intent title',

							subtitle: 'This is an subtitle.  Text can include unicode characters including emoji 📱.',

							imageUri:
								'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
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

			//if intent is unknown
		} else {
			let cbdata = { fulfillmentText: 'I didnt pick up your intent' };
			return cbdata;
		}
	}
}

module.exports = createWebhookCallback;
