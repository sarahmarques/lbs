# Azure DevOps Deployment Piplines
The following outlines how the build and deploy piplines work, what templates are avaliable and how to setup a new envionment for deployment

## CI/CD Process
There are two distinct deployment processes that run

### Preview
A preview deployment is a delpoyment to a preview environment and is a chance to preview the deployment before it is pushed live. A preview delpoyment deploys to a deploy preview environment in Netlify. When a PR is setup into a selected environment Netlify automatically triggers a deployment. 

#### Steps
1. Build the solution
2. Run the unit tests
3. Watch the preview deployment in Netlify and wait for it to complete
4. Once the deployment is complete run an integration test to prove the home page loads.

### Deploy
A deploy is a finalised deployment to an environment (QA, UAT, Production), when code is merged into a branch Netlify automatically triggers a deployment

#### Steps
1. Build the solution
2. Run the unit tests
3. Watch the deployment in Netlify and wait for it to complete
4. Once the deployment is complete run an integration test to prove the home page loads.

## Pipelines
| Name | Process | Trigger | Details |
|---|---|---|---|
| ci.yml | Preview | PR from feature branch into develop | The purpose of this pipeline is to stop any code being pushed into develop that fails quality gates or stops the site from deploying successfully. Code cannot be merged if this pipeline fails. |
| qa.yml | Deploy  | After a merge into develop | The purpose of this pipeline is to ensure a deployment to QA is successful |
| uat.yml | Deploy | After a merge into deployment/uat | The purpose of this pipeline is to ensure a deployment to UAT is successful |
| pre-prod.yml | Preview  | PR from feature branch into deployment/prod | The purpose of this pipeline is to stop a deployment being pushed into production that fails quality gates or stops the site from deploying successfully. It uses production Contentful content. Code cannot be merged if this pipeline fails. |
| prod.yml | Deploy | After a merge into deployment/prod | The purpose of this pipeline is to ensure a deployment to Prod is successful. This deployment has an extra step to tag the release |

## Templates
1. build-and-test.yml - Runs NPM build tasks, unit tests and caclulates code coverage
2. deploy-environment.yml - Includes all the steps required to deploy to an environment including building, testing and watching a deployment.
3. name-deployment.yml - Updates the name of the current deployment to include the build number
4. run-integration-tests.yml - Runs cypress integration tests
5. tag-deployment.yml - Runs the steps to tag a release
6. version-deployment.yml - Calculates the delpoyment version. 
7. watch-deploy.yml - Runs the steps to watch a deployment happening in Netlify to ensure it completes successfuly and fetch the URL created so integration tests know what URL to test.

## Versioning a deployment
Deployments are versioned using [SemVar](https://semver.org/). The process is semi-automated, using a combination of variables - to manage major and minor versions - and an automated counter to manage patches.

### Process
1. Every merge into QA automatically increments the patch number 
   - Major and Minor versions can be manually tweaked
2. During the QA deployment it calculate the next verions by combining the manually configured major, minor versions with the incremented patch number. The deployment name is updated with the version number
3. The incremebted patch number is stored as a library variable using [almops](https://github.com/devpro/almops)
4. On a deployment to UAT and Production the version number is re-calculated by combining the manually configured major, minor versions with patch number stored in the library variable.
5. Build names are updated with the version number so you can visualise what version is deployed in each environment

### Managing Major/Minor version
There are three library variables that help with managing versions.
If a commit into QA should increment the major or minor version then developers should increment this number before completing the commit. 

Variable Group: lbs-website-global

|Name|Purpose|
|---|---|
| MAJOR_VERSION | The major version we are currently up to for the solution |
| MINOR_VERSION | The minor version we are currently up to for the solution |
| PATCH_VERSION | The patch version we are currently up to for the solution. This is automatically managed and should not be edited. |

### ALMOPS
ALMOPS needs information to update the library variable. To ensure ALMOPS works the following library variables are required

Variable Group: lbs-website-global

|Name|Purpose|
|---|---|
| VARIABLE_GROUP_ID | This is the ID of the variable group that the patch variable is in |
| ORGANISATION_NAME | This is the name of the Organisation that that variable group that the patch variable is in |

## Setting up a New Deployment Environment
The follow steps should be taken to setup a new deployment environment

### Netlify 
A netlify site is required to deploy to.

1. In Netlify create a new site and connect it to the website repo
2. Configure the deployment and branch deployment parameters. These should be configured based on the requirements of the environment and wether or not previews are required.
3. Get the site ID from Netlify, as this is required for Azure DevOps

### Azure DevOps
The follow steps should be completed in Azure DevOps

#### Environment
- An environment should be created in Azure DevOps.
- A new library with the following variables should be created in Azure DevOps and a new variable should be added to the variable group `lbs-website-environments` the value should be the name of the new environment. 

#### Library Variable
A new variable group should be created with the following variables

|Name|Value|
|---|---|
|NETLIFY_AUTH_TOKEN|A Netlify auth token which you can generate in Netlify|
|NETLIFY_SITE_ID|The ID of the website to deploy to. This would have been generated above|

### Code changes
A new YML pipeline file should be created. You should copy the pipeline that most closely resembles the requirements of the new environment. This can be a copy of an existing one and renamed to the new environemnt. Due to the way environments work in Azure DevOps we have a variable per environment. So note you will need to update the `devOpsEnvironment` parameter with the name of the environment variable you create above. 

Update the variable groups so that your new library group is used, instead of the existing environment specific group