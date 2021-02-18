json.track do
    json.partial! '/api/tracks/track', track: @track
end


# [TEST] want to grab all comments (STUCK HERE)

json.comments do
    @track.comments.each do |comment|

        json.set! comment.id do
            json.extract! comment, :id, :body, :author_id, :track_id, :created_at

            # [TEST] putting each comments author's name in global slice of state
            json.author comment.author.username
        end
    end
end

