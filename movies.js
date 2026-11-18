use movie_streaming_DB

db.movies.insertOne({
  movie_id: 101,
  title: "Leo",
  genre: "Action",
  language: "Tamil",
  rating: 8.0
})

db.users.insertOne({
  user_id: 201,
  name: "Arun",
  subscription: "Premium"
})

db.watch_history.insertOne({
  user_id: 201,
  movie_id: 101,
  progress: 100
})

db.ratings.insertOne({
  user_id: 201,
  movie_id: 101,
  rating: 5
})

db.movies.find({ language: "Tamil" })