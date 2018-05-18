Perseus.ai Documentation

Sign-up for AWS account.

Set up aws IAM account user

Set up iAM user permissions

LambdaFullAccess
DynamoDBFullAccess
APIGatewayFullAccess

Local dev server
Install aws cli
Install node 8.10 //Your environment has been set up for using Node.js 8.10.0 (x64) and npm.
Install npm //C:\Users\joeti>npm -version 5.6.0
Install terraform
Install 7zip

Add all install .exe locations to windows environment variables

Run aws configure command
Use aws IAM client key and secret key as well as aws region

Use in express npm express generator To install base code base

Add infrastructure directory to base code base
Add ./infrastructure/main.tf
Add ./infrastructure/provider.tf

Add ./index.js file with export.handler(event,context,callback) code

Create storage tables in AWS DynamoDB

Create AWS API Gateway for dialogflow webhook
Create resource and POST method
Copy AWS API Gateway Webhook POST method Invoke url to Dialogflow webhook fulfillment integration setup to dialogflow’s agent webhook integration

Add command to ./infrastructure/main.tf script to create zip file in main directory from index.js file
“Build” : “7z a index.js guestbook.zip”
Add hash script

Open power shell to Cd to .../infrastructure/
Run npm run build command
Run terraform init command
Run terraform apply —auto-approve

Test lamda function

DialogFlow agent
Create agent
Set to use V2 integration
Get integration url and key for Facebook
Add AWS API gateway to webhook integration

Facebook messenger integration
Create Facebook business page
Create Facebook developer account
Enable messenger app in Facebook developer console
Create page messenger app access token
Create Facebook webhook
Check postback_messages and messages checkbox
Add dialogflow integration url and access token to Facebook webhook

Google Assistant setup
Link dialogflow agent to Google Actions project
