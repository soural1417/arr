/*



// Initialize the Amazon Cognito credentials provider
CognitoCachingCredentialsProvider credentialsProvider = new CognitoCachingCredentialsProvider(
    getApplicationContext(),
    "us-east-1:3ce2220a-2615-4cfa-a670-a2b7211a02a9", // Identity pool ID
    Regions.US_EAST_1 // Region
);




{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "mobiletargeting:PutEvents"
      ],
      "Resource": [
        "arn:aws:mobiletargeting:us-east-1:745263510073:apps/4ad7e329dfeb4f2cbcd2a73366a02d0a/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
          "mobiletargeting:UpdateEndpoint"
      ],
      "Resource": [
          "arn:aws:mobiletargeting:us-east-1:745263510073:apps/4ad7e329dfeb4f2cbcd2a73366a02d0a/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
          "mobileanalytics:PutEvents"
      ],
      "Resource": [
          "*"
      ]
    }
  ]
}





import Analytics from '@aws-amplify/analytics';
import Auth from '@aws-amplify/auth';

const amplifyConfig = {
  Auth: {
    identityPoolId: 'COGNITO_IDENTITY_POOL_ID',
    region: 'us-east-1'
  }
}
//Initialize Amplify
Auth.configure(amplifyConfig);

const analyticsConfig = {
  AWSPinpoint: {
        // Amazon Pinpoint App Client ID
        appId: '4ad7e329dfeb4f2cbcd2a73366a02d0a',
        // Amazon service region
        region: 'us-east-1',
        mandatorySignIn: false,
  }
}

Analytics.configure(analyticsConfig)

//Record an event
Analytics.record('some-event-name');

//Record a custom event
Analytics.record({
    name: 'Album',
    attributes: { genre: 'Rock', year: '1989' }
});

*/