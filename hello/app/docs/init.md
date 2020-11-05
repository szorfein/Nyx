## Dependencies

    $ gem install grpc
    $ gem install grpc-tools

## Create the app

    $ bundle gem app

## Correct the gemspec
Correct all `TODO`

    $ vim app.gemspec

```
spec.add_dependency "grpc"
```

## First proto rules

    $ vim proto/app.proto
    ~look_content~

## Generate proto

    $ mkdir lib/proto
    $ grpc_tools_ruby_protoc -Iproto --ruby_out=lib/proto --grpc_out=lib/proto proto/app.proto

    $ ls lib/proto
    app_pb.rb app_services_pb.rb

First part done...

### Names

bundle gem app
vim        app/proto/app.proto
   package app;
   service PostAppService
       rpc PostTitle(TitleRequest) returns (TitleReply)
   message TitleRequest
   message TitleReply
vim        lib/services/app_service.rb
     class AppService < App::PostAppService::Service
       def post_title() App::TitleReply.new(post_req, _unused_call)
vim        lib/client/app_client.rb
       def main stub = App::PostAppService::Stub.new(addr)
           message = stub.post_title(App::TitleRequest.new()) # proto/app_pb.rb

vim        lib/server/start.rb
     class Server.start @server.handle(Services::AppService)
