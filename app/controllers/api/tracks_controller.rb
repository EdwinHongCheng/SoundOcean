class Api::TracksController < ApplicationController

before_action :require_logged_in, only: [:create, :update, :destroy]

    def index
        @tracks = Track.all
        render :index
    end

    def show
        @track = Track.find(params[:id])
        render :show
    end
    
    def create
        @track = Track.new(track_params)
        @track.creator_id = current_user.id
        if @track.save
            render :show
        else
            render json: @track.errors.full_messages, status:422
        end
    end

    def update
        @track = Track.find(params[:track][:id])

        if @track.update(track_params)
            render :show
        else
            render json: @track.errors.full_messages, status: 422
        end
    end

    def destroy
        @track = Track.find(params[:id])
        @track.destroy

        render json: {}
    end

    private
    def track_params
        params.require(:track).permit(:title, :creator_id, :cover_art)
    end

end
