docker run -p 8080:8080 jp.icr.io/oc-repo/hello-python:v2
kubectl create deploy hello-python --image=jp.icr.io/oc-repo/hello-python:v2
