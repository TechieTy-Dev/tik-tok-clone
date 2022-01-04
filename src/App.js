import React, { useState, useEffect } from 'react';
import Video from "./Video.js";
import './App.css';
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("Videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    //BEM
    //Video Component - Sidebar(Heart,Chat, Share) - Footer(Music,Ticker,Disk)
    <div className="app">
      <div className="app_videos">
        {videos.map(
          ({url, channel, description, song, likes, messages, shares}) =>
          (
            <Video 
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            messages={messages}
            shares={shares}
            />
          )
          )}
      </div>
    </div>
  );
}

export default App;
