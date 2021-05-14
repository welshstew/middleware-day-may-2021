
https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html


```
brew tap aws/tap
brew install aws-sam-cli
sam --version
```

sam app templates: 
https://github.com/aws/aws-sam-cli-app-templates

Create a new app:

```
sam init
```

Test a javascript hello world:

```
npm install mocha chai --save-dev
npm test
```

Test it using sam (integration test I guess)

```
sam local invoke -e events/event.json
sam local start-api
```

Actually deploy the stuff

```
sam deploy --guided
```

delete via cloudformation (async process):

```
aws cloudformation delete-stack --stack-name sam-app
```