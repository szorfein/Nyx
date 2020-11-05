require 'proto/app_services_pb'

module Client
  def self.start
    stub = App::PostAppService::Stub.new('0.0.0.0:50052', :this_channel_is_insecure)
    req = stub.post_title(App::TitleRequest.new(title: 'Create your GPG keys'))
    puts "Title is: #{req.title}"
  end
end
