# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: app.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("app.proto", :syntax => :proto3) do
    add_message "app.PostRequest" do
      optional :title, :string, 1
    end
    add_message "app.PostReply" do
      optional :title, :string, 1
    end
  end
end

module App
  PostRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("app.PostRequest").msgclass
  PostReply = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("app.PostReply").msgclass
end
