class PostsController < ApplicationController
before_action :set_post, only: [:show, :update, :destroy]
before_action :authorize_request, only: [:create, :update, :destroy]

  def index
    @posts = Post.all

    render json: @posts.sort_by { |m| m[:created_at]}
  end

  def show
    render json: @post
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = @current_user.id

    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def update
    if @post.update(post_params)
      render json: @post
    else 
      render json: @post.errors, status: :unprocessable_entity
    end
  end


  def destroy
    @post.destroy
  end

  private

def set_post
  @post = Post.find(params[:id])
end

def post_params
  params.require(:post).permit(:subject, :content, :user_id, :medium_id )
end



end
