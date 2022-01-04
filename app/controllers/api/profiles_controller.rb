class Api::ProfilesController < ApplicationController
    def create
    # debugger
    @profile = Profile.new(profile_params)
    @profile.user_id = current_user.id
    if @profile.save
      render :show
    else
      render json: @profile.errors.full_messages, status: 422
    end
  end

  def update
    @profile = Profile.find_by(id: params[:id])
    if current_user.id == @profile.user_id && @profile.update(profile_params)
      render :show
    else
      render json: ['Could not update'], status: 422
    end
  end

  def index
    @profiles = Profile.where('user_id = ?', current_user.id)
    if @profiles
      render :index
    else
      render json: ['User has no profiles'], status: 422
    end
  end

  def destroy
    @profile = Profile.find_by(id: params[:id], user_id: current_user.id)
    if @profile
      @profile.destroy
    else
      render json: ["Profile cannot be found"], status: 422
    end
  end

  private
  def profile_params
    params.require(:profile).permit(:name)
  end
end
