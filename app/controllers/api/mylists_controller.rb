class Api::MylistsController < ApplicationController

  def index
    @mylists = Mylist.where('profile_id = ?', current_profile.id)
    if @mylists
      render :index
    else
      render json: ['Profile has no list'], status: 422
    end
  end
  
    def create
    # debuggerpar
    @list = Mylist.new(mylist_params)
    @profile = @list.profile
    @my_list = @profile.mylists
    if @list.save
      render :show
    else
      
      render json: @list.errors.full_messages
    end
  end

  def destroy
    @mylist = Mylist.find_by(id: params[:id])
    if @mylist && @mylist.destroy()
      render :show
    else
      render json: @mylist.errors.full_messages
    end
  end

  def mylist_params
    params.require(:mylist).permit(:profile_id, :video_id)
  end
end
