# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: "Jerry S.", password_digest: "12345")
User.create(username: "Melanie B.", password_digest: "54321")
User.create(username: "Steve S.", password_digest: "abcde")
User.create(username: "Jasmine M.", password_digest: "edcba")

puts "Users seeded"

Ant.create(queen_name: "Queen Elizabeth", species: "Red Ants/Harvester Ants", number_of_ants: 500, diet: "Their diet consists of fruits, water, seeds, and dead insects.", user_id: 1, likes: 24)
Ant.create(queen_name: "Queen Melanie", species: "Black Garden Ants", number_of_ants: 800, diet: "I give them fruits and dead insects! As well as syrup or sugar water, and that seems to excite them the most!", user_id: 2, likes: 34)
Ant.create(queen_name: "Queen Cleopatra", species: "Wood Ants", number_of_ants: 150, diet: "These fellas are known for eating anything you give them. I choose to give them dead bugs, fruits, and honey though.", user_id: 3, likes: 12)
Ant.create(queen_name: "Queen Grace", species: "Longhorn Black Crazy Ants", number_of_ants: 1500, diet: "I like to feed my Crazy Ants live and dead insects, and sugary foods as well.", user_id: 4, likes: 8)

puts "Ants seeded"