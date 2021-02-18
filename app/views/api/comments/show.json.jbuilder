json.comment do 
    json.extract! @comment, :id, :body, :author_id, :track_id, :created_at
end

json.author do 
    json.extract! @comment.author, :id, :username

    # [TEST] see if this works for a new comment
    # Result: think so, BUT since i refetch the track entirely
    # -> and that drags all the tracks new comments = their data
    # -> prob overwrites this fetch lol
    if @comment.author.profile_pic.attached?
        json.profilePicURL url_for(@comment.author.profile_pic)
    else
        json.profilePicURL 'https://ms.yugipedia.com//2/22/Gellenduo-TF04-JP-VG.jpg'
    end
end
