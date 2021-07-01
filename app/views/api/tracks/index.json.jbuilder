json.tracks do
    @tracks.each do |track|
        json.set! track.id do
            json.partial! 'track', track: track
        end
    end
end

json.users do
    @tracks.each do |track|
        json.set! track.creator.id do
            json.extract! track.creator, :id, :username, :email, :created_at
        end
    end
end
