class CollaborationsController < ApplicationController
  before_action :set_collaboration, only: [:show, :update, :destroy]

  def index
    @collaborations = Collaboration.all

    render json: @collaborations 
  end

  def show 
    @collaboration = Collaboration.find(params[:id])

    render json: @collaboration, include: :colab_posts
  end


  def create
    @collaboration = Collaboration.new(collaboration_params)

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
