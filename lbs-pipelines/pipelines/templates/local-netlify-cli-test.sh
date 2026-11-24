get_deploy() {
    arguments="{ \"deploy_id\": \"$deployId\" }"
    netlify api getDeploy --data "${arguments}"
}

get_latest_deploy(){
    response=$(netlify api listSiteDeploys --data '{ "site_id": "e8be7a2f-ce25-4634-8970-bca77346b65c" }')
    latestDeploy=$(jq 'map(select(.branch == '\"$source\"')) | sort_by(.created_at) | last' <<< $response)
}

find_latest_deploy(){
    continueHere=1
    numHere=0
    while [ $numHere -lt 4 ] && [ $continueHere -eq 1 ]
    do
        get_latest_deploy
        if [[ -n "$latestDeploy" ]]; then
            ((continueHere++))
        else
            ((numHere++))
            sleep 30
        fi
    done
}

triage(){
    if [[ $deployStatus == "error" ]] || [[ -z "$deployStatus" ]] ; then
        echo "An error has occured"
        echo "##vso[task.logissue type=error]Something went very wrong with the deployment."
        exit 1
    elif [[ $deployStatus == "ready" ]]; then
        echo "The build is complete"
        deploymentUrl=$(jq -r '.ssl_url' <<< "$latestDeploy")
        echo "Deployment URL: $deploymentUrl"
        echo "##vso[task.setvariable variable=DeploymentUrl;isOutput=true]$deploymentUrl"
        exit 0
    else
        echo "Build is on-going"
        echo $latestDeploy
        ((num++))
        sleep 20
    fi
}

find_deploy(){
    num=0
    while [ $num -lt 4 ]
    do
        latestDeploy=$(get_deploy)
        deployStatus=$(jq -r '.state' <<< "$latestDeploy")
        echo "deploy status: $deployStatus"
        triage
    done
}

echo "Build reason: $(Build.Reason)"
echo "Build.SourceBranch: $(Build.SourceBranch)"
var1="IndividualCI"
var2="PullRequest"
if [ "$var1" = "$var2" ] ; then
    branchName="feature/ci-cd-updates"
else
    branchName="feature/ci-cd-updates-2"
fi

echo "Calculating soruce branch. Currently: $branchName"
toRemove="refs/heads/"
replaceWith=""
original="feature/ci-cd-updates"
source="${original/#$toRemove/$replaceWith}"
echo "Branch Name: $source"

find_latest_deploy

deployStatus=$(jq -r '.state' <<< "$latestDeploy")
deployId=$(jq -r '.id' <<< "$latestDeploy")
echo "deploy status: $deployStatus"
echo "deploy id: $deployId"

if [[ -z "$deployId" ]] ; then
    echo "Deploy ID is empty"
    echo "##vso[task.logissue type=error]Could not find a deployment in Netlify."
    exit 1
fi

find_deploy

echo "##vso[task.logissue type=error]Something went very wrong with the deployment."
exit 1