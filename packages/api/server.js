const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');

dotenv.config();

const PORT = process.env.PORT || 4001;

const app = express();
app.use(cors());

// API base URL
const LASTFM_BASE_URL = "http://ws.audioscrobbler.com/2.0/"

app.get("/recentlyPlayed", (_req, res) => {
    axios.get(`${LASTFM_BASE_URL}?method=user.getrecenttracks&user=stricklandemma&api_key=${process.env.LASTFM_API_KEY}&format=json`)
        .then(response => {
            const recentMusic = response.data.recenttracks.track[0];
            const image = recentMusic.image && recentMusic.image.length > 0 ? recentMusic.image[2]['#text'] : undefined;
            console.log('response: ', response.data);
            res.json({
                track: recentMusic.name,
                artist: recentMusic.artist['#text'],
                album: recentMusic.album['#text'],
                image: image
            })
        })
        .catch(error => {
            console.log('Lastfm error: ', error);
            res.status(500).json({
                error: {
                    message: "Error fetching lastfm api"
                }
            })
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
