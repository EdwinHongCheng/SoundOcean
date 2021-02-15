json.extract! track, :id, :title, :creator_id

# if track.cover_art.attached?
#     json.cover_art url_for(track.cover_art)
# else
#     json.imageURL 'http://dalelyles.com/musicmp3s/no_cover.jpg'
# end