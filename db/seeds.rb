# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Track.delete_all

guest = User.create!(
  username: 'guest',
  email: 'guest@gmail.com',
  password: '123456'
)

everfall = User.create!(
  username: 'everfall',
  email: 'everfall@gmail.com',
  password: '123456'
)
