################## .netcore #######

dotnet --version
dotnet new mvc -o HelloWorldAspNetCore

cd HelloWorldAspNetCore
dotnet run --urls=http://localhost:8080

vim Dockerfile

################Dockerfile###################################


######################################################################

docker build -t jp.icr.io/oc-repo/hello-dotnet:v1 .
docker run -p 8080:8080 jp.icr.io/oc-repo/hello-dotnet:v1

docker push jp.icr.io/oc-repo/hello-dotnet:v1i



kubectl create hello-dotnet \
    --image=jp.icr.io/oc-repo/hello-dotnet:v1 \
    --port=8080
