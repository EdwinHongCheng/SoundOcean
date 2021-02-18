json.extract! track, :id, :title, :creator_id


# [!!! WORKS] putting each track's creator's name in global slice of state
json.creator track.creator.username


# [WORKS] - based on soundcrowd
if track.cover_art.attached?
    json.imageURL url_for(track.cover_art)
else
    # soundcrowd's generic music (blank music)
    # json.imageURL 'http://dalelyles.com/musicmp3s/no_cover.jpg'

    # [TEST] Googled another image (record cover)
    # json.imageURL 'https://images.fineartamerica.com/images-medium-large-5/music-record-henrik-lehnerer.jpg'

    # [CURRENT FAV] Default pic if no cover art: Sanwitch
    json.imageURL 'https://ms.yugipedia.com//b/b6/Sanwitch-TF04-JP-VG.jpg'
end

# [WORKS] - audio file
if track.audio_file.attached?
    json.audioURL url_for(track.audio_file)
else
    json.audioURL ''
end


# [WIP] [WORKS SO FAR] 
# - still need to test if profile_pic IS attached (havent attached them yet)
# - might be unnecessary tho
if track.creator.profile_pic.attached?
    json.profilePicURL url_for(track.creator.profile_pic)
else
    json.profilePicURL 'https://ms.yugipedia.com//2/22/Gellenduo-TF04-JP-VG.jpg'
end

