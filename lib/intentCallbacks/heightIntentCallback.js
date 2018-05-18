class heightIntentCallback {
	//can pass just the intent and action instead of entire repsonse object. parse in main
	constructor(event) {
		this.event = event;
	}

	createheightIntentCallback(event) {
		let IntentProvided = event.queryResult.intent['displayName'];

		console.log(IntentProvided);

		if (IntentProvided.toString() === 'height intent') {
			let cbdata = {
				fulfillmentText: 'i recieved your height intent',
				fulfillmentMessages: [
					{
						platform: 'FACEBOOK',

						card: {
							title: 'Title: this is a height intent title',

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

					{
						text: 'Would you like to play a game?',
						attachments: [
							{
								text: 'Choose a game to play',
								fallback: 'You are unable to choose a game',
								callback_id: 'wopr_game',
								color: '#3AA3E3',
								attachment_type: 'default',
								actions: [
									{
										name: 'game',
										text: 'Chess',
										type: 'button',
										value: 'chess',
									},
									{
										name: 'game',
										text: "Falken's Maze",
										type: 'button',
										value: 'maze',
									},
									{
										name: 'game',
										text: 'Thermonuclear War',
										style: 'danger',
										type: 'button',
										value: 'war',
										confirm: {
											title: 'Are you sure?',
											text: "Wouldn't you prefer a good game of chess?",
											ok_text: 'Yes',
											dismiss_text: 'No',
										},
									},
								],
							},
						],
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
module.exports = heightIntentCallback;
