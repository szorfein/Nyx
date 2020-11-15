require 'nyx_post'

class Api::V1::PostsController < ApplicationController
  before_action :find_post, only: [:show, :destroy]

  def index
    posts = NyxPost::Client::GetPost.new.all(0, 0)
    render json: posts
  end

  def show
    begin
      render json: @post
    rescue
      render "No post #{params[:id]} found.", status: 400
    end
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render @post
    else
      render "Unable to create post.", status: 400
    end
  end

  # DELETE /posts/:id
  def destroy
    if @post
      @post.destroy
      render plain: 'Successfully deleted.', status: 200
    else
      render plain: "Unable to delete post #{params[:id]}.", status: 400
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :description)
  end

  def find_post
    @post = Post.find(params[:id])
  end
end
