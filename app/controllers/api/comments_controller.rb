class Api::CommentsController < ApplicationController

    # [NOTE] just make Create + Destroy
    # - Question: based on SoundCrowd, but how do we display comments w/o index or show (???)
    # - answer: render :show for "create" action

    # # # [ W I P ] - based on soundcrowd + my prev code

    def create
        @comment = Comment.new(comment_params)
        @comment.author_id = current_user.id

    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy 
        render json: {}
    end


    private

    def comment_params
        params.require(:comment).permit(:body, :track_id)
    end

end
