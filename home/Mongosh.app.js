/*
use game_store
db.createCollection("users")
db.createCollection("games")
db.createCollection("purchases")

1. Barcha o'yinlarni ko'rsatish
db.games.find()

2. Narxi 20$ dan yuqori o'yinlar
db.games.find({ price: { $gt: 20 } })

3. Reyting bo'yicha saralash
db.games.find().sort({ rating: -1 })

4. PC platformali o'yinlar
db.games.find({ platforms: `PC` })

5. Username va emaillar
db.users.find({}, { username: 1, email: 1, _id: 0 })

6. Yosh yangilash
db.users.updateOne({ username: `gamer123` },{ $set: { age: 21 } })


*/
