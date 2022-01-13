const express = require('express')
const app = express()
const port = 3000

const fs = require('fs')
const path = require('path')

app.get('/', (req, res) => {
  var items = {}
  //title
  try {
    const title = fs.readFileSync('./Data/title.txt', 'utf8')
    items['title'] = title
  } catch (err) {
    console.error(err)
  }
  //artists
  try {
    const artist = fs.readFileSync('./Data/artist.txt', 'utf8')
    arrayArtist = artist.split(',')
    items['artists'] = arrayArtist
  } catch (err) {
    console.error(err)
  }
  //album
  try {
    const album = fs.readFileSync('./Data/album.txt', 'utf8')
    items['album'] = album
  } catch (err) {
    console.error(err)
  }
  //duration
  try {
    const duration = fs.readFileSync('./Data/duration.txt', 'utf8')
    var timeMs =
      Number(duration.split(':')[0]) * 60000 +
      Number(duration.split(':')[1]) * 1000
    items['duration'] = timeMs
  } catch (err) {
    console.error(err)
  }
  //progress
  try {
    const progress = fs.readFileSync('./Data/progress.txt', 'utf8')
    var timeMs =
      Number(progress.split(':')[0]) * 60000 +
      Number(progress.split(':')[1]) * 1000
    items['progress'] = timeMs
  } catch (err) {
    console.error(err)
  }
  //cover
  items['cover_url'] = path.resolve('./Data/cover.png')

  const json = JSON.stringify(items)
  res.send(json)
})

app.listen(port, () => {
  console.log(`Server running port ${port}`)
})
