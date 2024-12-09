import db from '../util/db.js'

export const getMovies = async (req, res) => {
  let movies
  let auditoriums
  let schedules
  await db.execute(`SELECT * FROM movie`).then((result) => {
    movies = result[0]
  })
  await db.execute(`SELECT * FROM auditorium`).then((result) => {
    auditoriums = result[0]
  })
  await db.execute(`SELECT * FROM schedule`).then((result) => {
    schedules = result[0]
  })

  // 4 schedules per movie
  let counter = 0
  const schedulesArr = []

  // Create schedules for each movie
  movies.forEach((movie, i) => {
    let j = 0
    const arr = []

    // 1 auditorium per movie
    const auditorium = auditoriums[i].auditorium

    const obj = { movie: movie, auditorium: auditorium, schedule: arr }

    schedulesArr.push(obj)
    // 4 schedules per movie
    while (j < 4) {
      arr.push(schedules[counter])
      j++
      counter++
    }
  })

  return res
    .status(200)
    .json({ message: 'Movies from DB.', data: { movies, schedules: schedulesArr } })
}
