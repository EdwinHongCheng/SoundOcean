class Api::TracksController < ApplicationController

before_action :require_logged_in, only: [:create, :update, :destroy]

    def show
        @track = Track.find(params[:id])
        render "api/tracks/show"
    end
    
    def create
        @track = Track.new(track_params)
        @track.creator_id = current_user.id
        if @track.save
            render "api/tracks/show"
        else
            render json: @track.errors.full_messages, status:422
        end
    end

    private
    def track_params
        params.require(:track).permit(:title, :creator_id)
    end

end
