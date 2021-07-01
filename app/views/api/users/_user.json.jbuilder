json.extract! user, :id, :username, :email, :created_at

if user.profile_pic.attached?
    json.profilePicURL url_for(user.profile_pic)
else
    json.profilePicURL 'https://ms.yugipedia.com//2/22/Gellenduo-TF04-JP-VG.jpg'
end
