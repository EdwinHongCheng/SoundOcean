json.track do
    json.partial! '/api/tracks/track', track: @track
end


json.comments do
    @track.comments.each do |comment|

        json.set! comment.id do
            json.extract! comment, :id, :body, :author_id, :track_id, :created_at

            json.author comment.author.username

            if comment.author.profile_pic.attached?
                json.profilePicURL url_for(comment.author.profile_pic)
            else
                json.profilePicURL 'https://ms.yugipedia.com//2/22/Gellenduo-TF04-JP-VG.jpg'
            end
        end
    end
end

