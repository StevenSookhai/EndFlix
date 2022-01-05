class ApplicationController < ActionController::Base
    # skip_before_action :verify_authenticiy_token

    helper_method :current_user, :logged_in?, :current_profile, :profile_found?
    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def ensure_logged_in
        render json: ['Not logged in'], status: 404 unless logged_in?
    end

    def logged_in?
        !!current_user
    end

    def login!(user)
        @current_user = user
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    def current_profile
        if current_user.nil?
            return nil
        end 
        #doing this only finds the profile that matches the user_id...hmmmmm
        #need a way to maybe find the profile by id of some sort...maybe a boolean?
        #maybe add a boolean to profile table and set boolean when 'logging in a profile'?
        #then find the profile with the current boolean set to true, should be able to find the profile
        #when logging out a profile, set boolean back to false?
        #...plz work ;-;
        
        @profile = Profile.find_selected_profile(current_user.id)

        if @profile
            return @profile 
        else
            return nil
        end 
    end

    def profile_found?
        if current_profile
            return true
        else
            nil
        end 
    end 

    def login_profile!(profile)
        @current_profile = profile
        # profile.selected = true
        # profile.save!
        profile.setSelectedProfile
        

    end 

    def logout_profile(profile)
        @current_profile = nil
        # profile.selected = false
        # profile.save!
        profile.unSelectedProfile
    end 

end