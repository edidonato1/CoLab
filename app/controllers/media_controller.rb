class MediaController < ApplicationController

  def index
    @media = Medium.all

    render json: @media
  end

  def show 
    @medium = Medium.find(params[:id])

    render json: @medium, include: :posts
  end


  def create
    @medium = Medium.new(medium_params)

    if @medium.save
      render json: @medium, status: :created
    else
      render json: @medium.errors, status: :unprocessable_entity
  end
end


  def destroy
    @medium.destroy
  end

end
