json.extract! track, :id, :title, :creator_id


# [Works] - based on soundcrowd
if track.cover_art.attached?
    json.imageURL url_for(track.cover_art)
else
    # soundcrowd's generic music
    # json.imageURL 'http://dalelyles.com/musicmp3s/no_cover.jpg'

    # Sanwitch (Default pic if no cover art)
    json.imageURL 'https://ms.yugipedia.com//b/b6/Sanwitch-TF04-JP-VG.jpg'
end


# [TEST] - audio file
if track.audio_file.attached?
    json.audioURL url_for(track.audio_file)
else
    json.audioURL ''
end
