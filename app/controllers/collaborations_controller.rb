class CollaborationsController < ApplicationController
  before_action :set_collaboration, only: [:show, :update, :destroy, :add_user, :add_medium]
  before_action :authorize_request, only: [:create, :destroy]

  def index
    @collaborations = Collaboration.all

    render json: @collaborations
  end

  def show 
    @collaboration = Collaboration.find(params[:id])

    render json: @collaboration, include: :colab_posts
  end



  def add_user # see custom route in config -> routes.rb
    @user = User.find(params[:user_id])
    @collaboration.users << @user

    render json: @collaboration, include: :users
  end

  def add_medium
    @medium = Medium.find(params[:medium_id])
    @collaboration.media << @medium

    render json: @collaboration, include: :media
  end

  def create
    @collaboration = Collaboration.new(collaboration_params)
    @collaboration.user_id = @current_user.id

    if @collaboration.save
      render json: @collaboration, status: :created
    else
      render json: @collaboration.errors, status: :unprocessable_entity
    end
  end


  def destroy
    @collaboration.destroy
  end

  private 

  def set_collaboration 
    @collaboration = Collaboration.find(params[:id])
  end

  def collaboration_params
    params.require(:collaboration).permit(:title, :status, :user_id)
  end

end
