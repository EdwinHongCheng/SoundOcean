json.comment do 
    json.extract! @comment, :id, :body, :author_id, :track_id, :created_at
end

json.author do 
    json.extract! @comment.author, :id, :username

    # [WIP] no Profile Pic yet -> commenting this out for now
    # if @comment.author.profile_pic.attached?
    #     json.photoURL url_for(@comment.author.profile_pic)
    # else
    #     json.photoUrl ''
    # end
end
