class Api::SessionsController < ApplicationController
    before_action :ensure_logged_in, only: [:destroy]
    def create
        # debugger
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render json: @user
        else 
            render json: ['Invalid email or password'], status: 422
        end
    end

    def destroy
        logout!
        render json: {}
    end
end
