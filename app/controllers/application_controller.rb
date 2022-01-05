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
       
        # @profile = Profile.find_by(user_id: current_user.id)

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
        current_profile = profile
    end 

end