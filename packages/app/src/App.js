import React, { useEffect, useState } from 'react';
import './App.css';

const SPOTIFY_PROFILE_URL = "https://open.spotify.com/user/1242322676?si=865f2ec92d6a4a14";

function App() {
  const [response, setResponse] = useState('');

  const openSpotifyProfile = () => {
    window.open(SPOTIFY_PROFILE_URL, "_blank");
  }

  useEffect(() => {
    fetch("http://localhost:4001/recentlyPlayed")
      .then(res => res.json())
      .then(result => {
        setResponse(result);
      }).catch(error => {
        console.log('error: ', error);
      });
  }, []);

  return (
    <div className="App">
      {response && (
        <div className="container">
          <div className="title">Emma Strickland</div>
          <div className="subtext">
            Software Engineer based in Brooklyn, NY
            <hr />
            <div className="link">
              <a href="mailto:emlstrick@gmail.com" target="_blank" rel="noopener noreferrer">
                Email
              </a>
            </div>
            <div className="link">
              <a href="https://www.linkedin.com/in/emmalstrickland/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
            <div className="link">
              <a href="https://github.com/emma-strickland" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </div>
            <hr />
            <div className="current">
              Currently listening to:
            </div>
            <div className="music-text">
              <img src={response.image} alt="album-art" className="album-art" onClick={openSpotifyProfile} />
              <div className="music-subtitle">"{response.track}" – {response.artist}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
