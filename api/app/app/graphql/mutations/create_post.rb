require 'nyx_post'

module Mutations
  class CreatePost < BaseMutation
    argument :title, String, required: true
    argument :description, String, required: true

    # Return type from the mutation
    type Types::PostType

    def resolve(title: nil, description: nil)
      NyxPost::Client::CreatePost.new(title, description).start
    end
  end
end
