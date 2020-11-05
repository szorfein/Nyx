require 'app'
require 'proto/app_services_pb'

module Services
  class AppService < App::PostAppService::Service
    # use rpc :PostHello from lib/proto/app_services_pb
    def post_title(post_req, _unused_call)
      puts "Received title app request for #{post_req.title}"
      # use App::PostReply from lib/proto/app_services_pb
      App::TitleReply.new(title: post_req.title)
    end
  end
end
