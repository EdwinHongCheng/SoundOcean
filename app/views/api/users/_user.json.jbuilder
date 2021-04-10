json.extract! user, :id, :username, :email, :created_at

# [TEST] NOTE: buggy cuz one user has a "profile pic attached"
# -> BUT, i prob dont have the url attached to it yet (from AWS)

# [NOTE] if things break -> just comment out lines: 7-9 + 11
if user.profile_pic.attached?
    json.profilePicURL url_for(user.profile_pic)
else
    json.profilePicURL 'https://ms.yugipedia.com//2/22/Gellenduo-TF04-JP-VG.jpg'
    # json.profilePicURL 'https://ms.yugipedia.com//2/24/Marshmallon-TF04-JP-VG.png'
end
