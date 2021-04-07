json.extract! track, :id, :title, :creator_id


# [!!! WORKS] putting each track's creator's name in global slice of state
json.creator track.creator.username


# [WORKS] - based on soundcrowd
if track.cover_art.attached?
    json.imageURL url_for(track.cover_art)
else
    # Default Cover Art (Uploaded to my AWS)
    json.imageURL 'https://soundocean-seed.s3-us-west-1.amazonaws.com/default_cover_art.jpg'
    
    # soundcrowd's generic music (blank music)
    # json.imageURL 'http://dalelyles.com/musicmp3s/no_cover.jpg'

    # Sanwitch (Default Pic)
    # json.imageURL 'https://ms.yugipedia.com//b/b6/Sanwitch-TF04-JP-VG.jpg'
end

# [WORKS] - audio file
if track.audio_file.attached?
    json.audioURL url_for(track.audio_file)
else
    json.audioURL ''
end

if track.creator.profile_pic.attached?
    json.profilePicURL url_for(track.creator.profile_pic)
else
    json.profilePicURL 'https://ms.yugipedia.com//2/22/Gellenduo-TF04-JP-VG.jpg'
    # json.profilePicURL 'https://ms.yugipedia.com//b/b6/Sanwitch-TF04-JP-VG.jpg'
    # json.profilePicURL 'https://ms.yugipedia.com//2/24/Marshmallon-TF04-JP-VG.png'
end

