# Middleware Day 14/05/2021 : Serverless on AWS + some Knative

- Overview of Serverless/Lambda
- Creating function via the console
- function via SAM (and invoking locally)
- lambda - BYO container
- function via Serverless + Serverless Examples
- AWS API Gateway -> Lambda -> DynamoDB -> DynamoDB Streams -> Knative pod on Openshift

## BYO Container...

Doc in the directory

## Knative / Pods on Openshift

See the sample-helm-chart here, and the code is as nodejs-mongodb-crud-api

```
#login to your cluster
oc new-project serverless-demo
helm install tutorial1 ./sample-helm-chart/tutorial-crud-api
#later...
oc create -f ./nodejs-mongodb-crud-api/knative-service.yaml
```

Note that the IP address / service name is no longer injected into the container (strange!).  So we need to ensure:

```
...
      containers:
        - image: quay.io/swinches/tutorial-crud-api:latest
          env:
          - name: DATABASE_SERVICE_NAME
            value: tutorial1-tutorial-crud-api-mongo
          - name: TUTORIAL1_TUTORIAL_CRUD_API_MONGO_SERVICE_HOST
            value: 172.30.242.244
          - name: MONGODB_USER
            valueFrom:
              secretKeyRef:
...
```

## Nice Links:

- Serverless examples: https://github.com/serverless/examples
- FooBar serverless: https://www.youtube.com/channel/UCSLIvjWJwLRQze9Pn4cectQ
- Lego serverless: https://www.youtube.com/watch?v=HcbnrJdNBRI
- DynamoDB advanced design patterns: https://www.youtube.com/watch?v=HaEPXoXVf2k
- Aurora Serverless: https://aws.amazon.com/rds/aurora/serverless/
- Serverless Handbook: https://serverlesshandbook.dev