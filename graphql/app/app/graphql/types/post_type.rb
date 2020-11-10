module Types
  class PostType < Types::BaseObject
    field :id, String, null: false
    field :title, String, null: false
    field :description, String, null: false
  end
end
