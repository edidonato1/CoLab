class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :add_medium, :remove_medium]

  def create
    @user = User.new(user_params)

    if @user.save
      @token = encode({id: @user.id})
      render json: {
        user: @user.attributes.except("password_digest"),
        token: @token
        }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def index 
    @users = User.all

    render json: @users
  end


  def show 
    render json: @user, include: :media
  end

  def update 
    if @user.update(user_params)
      render json: @user, include: :media
    else 
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def add_medium
    @medium = Medium.find(params[:medium_id])
    @user.media << @medium

    render json: @user, include: :media
  end

  def remove_medium
    @medium = Medium.find(params[:medium_id])
    @user.media.delete(@medium)

    render json: @user, include: :media
  end
  
  private
    def set_user 
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:username, :email, :password, :img_url, :bio)
    end
end
