const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');

dotenv.config();

const PORT = process.env.PORT || 4001;

const POLL_INTERVAL_MS = 60000;

const app = express();
app.use(cors());

// API base URL.
const LASTFM_BASE_URL = "http://ws.audioscrobbler.com/2.0/";

// Most recent LastFM data.
let recentData = {};

const fetchRecentData = async function () {
  try {
    const lastFmData = await axios.get(`${LASTFM_BASE_URL}?method=user.getrecenttracks&user=stricklandemma&api_key=${process.env.LASTFM_API_KEY}&format=json`)
    const recentMusic = lastFmData.data.recenttracks.track[0];
    const image = recentMusic.image && recentMusic.image.length > 0 ? recentMusic.image[2]['#text'] : undefined;
    let response = {
      track: recentMusic.name,
      artist: recentMusic.artist['#text'],
      album: recentMusic.album['#text'],
      image: image
    }
    console.log('Fetched LastFM data: ', response);
    return response;
  } catch (err) {
    console.log("Error fetching LastFM data: ", err)
  }
  return {};
}

app.get("/recentlyPlayed", async (_req, res) => {
  res.json(recentData)
});

const fetchRecentDataLoop = async function () {
  recentData = await fetchRecentData();
  setTimeout(() => {
    fetchRecentDataLoop()
  }, POLL_INTERVAL_MS)
}

const start = async function () {
  // Fetch first batch of data.
  recentData = await fetchRecentData();

  // Begin listening to requests.
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

  // Fetch data periodically.
  fetchRecentDataLoop();
}

// Run startup asynchronously so we can fetch a first batch of data before accepting requests.
start();