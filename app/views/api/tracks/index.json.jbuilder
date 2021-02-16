json.tracks do
    @tracks.each do |track|
        json.set! track.id do
            json.partial! 'track', track: track
        end
    end
end

# [CHANGED] Erik's suggestion (to keep state = one source of truth, no dupes)
json.users do
    @tracks.each do |track|
        json.set! track.creator.id do
            json.extract! track.creator, :id, :username, :email
        end
    end
end
