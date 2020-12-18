class ColabPostsController < ApplicationController

before_action :set_colab_post, only: [:show, :update, :destroy]
before_action :authorize_request, only: [:create, :update, :destroy]

  def index
    @colab_posts = Colab_post.all

    render json: @colab_posts
  end

  def show
    render json: @colab_post
  end

  def create
    @colab_post = ColabPost.new(colab_post_params)
    @colab_post.user_id = @current_user.id

    if @colab_post.save
      render json: @colab_post, status: :created
    else
      render json: @colab_post.errors, status: :unprocessable_entity
    end
  end

  def update
    if @colab_post.update(colab_post_params)
      render json: @colab_post
    else 
      render json: @colab_post.errors, status: :unprocessable_entity
    end
  end


  def destroy
    @colab_post.destroy
  end

  private

  def set_colab_post
    @colab_post = colab_post.find(params[:id])
  end

  def colab_post_params
    params.require(:colab_post).permit( :content, :user_id, :collaboration_id )
  end

end
