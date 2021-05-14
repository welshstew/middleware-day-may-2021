BYO Container

Build and run locally
```
docker build -t random-letter .
docker run -p 9000:8080 random-letter:latest
curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'
```


Push to an ECR Repo:
```
aws ecr create-repository --repository-name random-letter --image-scanning-configuration scanOnPush=true
ECR_REPOSITORY=????.dkr.ecr.eu-west-2.amazonaws.com/random-letter
docker tag random-letter:latest $ECR_REPOSITORY

aws ecr get-login-password | docker login --username AWS --password-stdin $ECR_REPOSITORY
docker push $ECR_REPOSITORY
```

Then create via Web UI.

