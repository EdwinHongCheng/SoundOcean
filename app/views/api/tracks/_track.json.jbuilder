json.extract! track, :id, :title, :creator_id


# [WORKS!] putting each track's creator's name in global slice of state
json.creator track.creator.username


# [WORKS] - based on soundcrowd
if track.cover_art.attached?
    json.imageURL url_for(track.cover_art)
else
    # soundcrowd's generic music
    # json.imageURL 'http://dalelyles.com/musicmp3s/no_cover.jpg'

    # Default pic if no cover art: Sanwitch
    json.imageURL 'https://ms.yugipedia.com//b/b6/Sanwitch-TF04-JP-VG.jpg'
end




# [WORKS] - audio file
if track.audio_file.attached?
    json.audioURL url_for(track.audio_file)
else
    json.audioURL ''
end
