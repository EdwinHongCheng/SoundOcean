json.track do
    json.partial! '/api/tracks/track', track: @track
end


# [TEST] want to grab all comments (STUCK HERE)

json.comments do
    @track.comments.each do |comment|

        json.set! comment.id do
            json.extract! comment, :id, :body, :author_id, :track_id, :created_at

            # [WORKS] putting each comments author's name in global slice of state
            json.author comment.author.username

            # [TEST] - works for getting profile pic for commenters
            if comment.author.profile_pic.attached?
                json.profilePicURL url_for(comment.author.profile_pic)
            else
                json.profilePicURL 'https://ms.yugipedia.com//2/24/Marshmallon-TF04-JP-VG.png'
            end
        end
    end
end

