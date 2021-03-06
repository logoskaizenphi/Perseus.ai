const heightIntentCallback = require('./intentCallbacks/heightIntentCallback');
const weightIntentCallback = require('./intentCallbacks/weightIntentCallback');
const approachanxietyIntentCallback = require('./intentCallbacks/approachanxietyIntentCallback');
const daytimeapproachIntentCallback = require('./intentCallbacks/daytimeapproachIntentCallback');
const nighttimeapproachIntentCallback = require('./intentCallbacks/nighttimeapproachIntentCallback');

class createWebhookCallback {
	//can pass just the intent and action instead of entire repsonse object. parse in main
	constructor(event) {
		this.event = event;
	}

	createDialogflowWebhookCallback(event) {
		let IntentProvided = event.queryResult.intent['displayName'];
		console.log(IntentProvided);

		if (IntentProvided.toString() === 'height intent') {
			//call callback class

			const cbdatacreate = new heightIntentCallback(event);
			const cbdata = cbdatacreate.createheightIntentCallback(event);
			console.log(cbdata);
			return cbdata;
		}

		if (IntentProvided.toString() === 'weight intent') {
			//call callback class

			const cbdatacreate = new weightIntentCallback(event);
			const cbdata = cbdatacreate.createweightIntentCallback(event);
			console.log(cbdata);
			return cbdata;
		}
		//Approach Anxiety
		if (IntentProvided.toString() === 'Approach Anxiety') {
			//call callback class

			const cbdatacreate = new approachanxietyIntentCallback(event);
			const cbdata = cbdatacreate.createapproachanxietyIntentCallback(event);
			console.log(cbdata);
			return cbdata;
		}

		//daytimeapproachIntentCallback
		if (IntentProvided.toString() === 'Daytime Approach') {
			//call callback class

			const cbdatacreate = new daytimeapproachIntentCallback(event);
			const cbdata = cbdatacreate.createdaytimeapproachIntentCallback(event);
			console.log(cbdata);
			return cbdata;
		}

		if (IntentProvided.toString() === 'Nighttime Approach') {
			//call callback class

			const cbdatacreate = new nighttimeapproachIntentCallback(event);
			const cbdata = cbdatacreate.createnighttimeapproachIntentCallback(event);
			console.log(cbdata);
			return cbdata;
		}

		//if intent is unknown
		else {
			let cbdata = { fulfillmentText: 'I didnt pick up your intent' };
			return cbdata;
		}
	}
}
module.exports = createWebhookCallback;
