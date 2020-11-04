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
