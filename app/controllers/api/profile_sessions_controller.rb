class Api::ProfileSessionsController < ApplicationController
    def create
        # debugger
        @profile = Profile.find_by(id: params[:profile][:id])
        user = User.find_by(id: @profile.user_id)
        profiles = user.profiles
        #not actually calling logout_profile yet,will change later when adding logout profile implementation
        profiles.each do |profile|
          if profile.id != @profile.id && profile.selected == true
              profile.unSelectedProfile
          end 
        end 
        # @profile.user_id = current_user.id
        #         if @profile.save
        #             render :show
        #         else
        #             render json: @profile.errors.full_messages, status: 422
        #         end
        # debugger
        if @profile 
          login_profile!(@profile)
          render json: @profile
        else
          render json: ['profile does not exisit'], status: 403
        end 
    end

    private

  def profile_params
    params.require(:profile).permit(:name)
  end
end
