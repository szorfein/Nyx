require 'nyx_post'

module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.
    field :all_posts, [PostType], null: false
    def all_posts
      NyxPost::Client::GetPost.new.all(0, 0)
    end

    field :post_by_id, PostType, null: false
    def post_by_id
      NyxPost::Client::GetPost.new.by_id("1")
    end
  end
end
