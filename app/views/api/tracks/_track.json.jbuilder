json.extract! track, :id, :title, :creator_id, :created_at

json.creator track.creator.username

if track.cover_art.attached?
    json.imageURL url_for(track.cover_art)
else
    # Default Cover Art (Uploaded to my AWS)
    json.imageURL 'https://soundocean-seed.s3-us-west-1.amazonaws.com/default_cover_art.jpg'
end

# Audio file
if track.audio_file.attached?
    json.audioURL url_for(track.audio_file)
else
    json.audioURL ''
end

if track.creator.profile_pic.attached?
    json.profilePicURL url_for(track.creator.profile_pic)
else
    json.profilePicURL 'https://ms.yugipedia.com//2/22/Gellenduo-TF04-JP-VG.jpg'
end

