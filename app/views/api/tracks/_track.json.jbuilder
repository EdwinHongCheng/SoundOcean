json.extract! track, :id, :title, :creator_id


# [TEST] - based on soundcrowd
if track.cover_art.attached?
    json.imageURL url_for(track.cover_art)
else
    json.imageURL 'http://dalelyles.com/musicmp3s/no_cover.jpg'
end
