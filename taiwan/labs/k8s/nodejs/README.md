ibmcloud ks cluster create classic --name <CLUSTER_NAME>

ibmcloud target -r <REGION> -g default #FREE cluster
  
ibmcloud ks cluster config --cluster <CLUSTER_ID>

kubectl config current-context # Verify Cluster context

kubectl get nodes #test

ibmcloud regions #jp-tok

ibmcloud cr region-set jp-tok #jp.icr.io/

ibmcloud cr namespace-add <NAMESPACE_NAME>




ibmcloud cr build -t jp.icr.io/<NAMESPACE>/<REPO_NAME>:<VERSION> .
  
ibmcloud resource group-create <RESOURCE_GROUP_NAME>

ibmcloud target

ibmcloud target -g <RESORCE_GROUP_NAME>

ibmcloud cr build -t jp.icr.io/oc-repo/nice-node:v1 .

#kubectl create deployment nodeapp --image=jp.icr.io/oc-repo/nice-node:v1



#kubectl expose deployment/hello-world --type=NodePort --port=8080 --name=hello-world --target-port=8080


