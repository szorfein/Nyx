# Create models
Use singular for `model`, plural for `controller`.

    $ rails g model Post title:string description:string

`id` field is automatically created, so no need to specify here...

# Apply change

    $ rails db:setup
    $ rails db:migrate

# Controllers

    $ rails g controller api/v1/Posts

# Routes
In the config/routes, add a road for `Post`

```ruby
Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end
end
```
Will match with: https://localhost:3000/api/v1/posts, you can check with `rails routes`

## Write Controller
vim app/controller/api/v1/posts_controller.rb

```ruby
class Api::V1::PostsController < ApplicationController
  # GET /posts
  def index
    @posts = Post.all
  end
end
```

### Links
+ https://medium.com/@oliver.seq/creating-a-rest-api-with-rails-2a07f548e5dc
