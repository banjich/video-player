import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search';
import api from './apis/api';
import Videolist from './components/Videolist';
import Videodetail from './components/Videodetail';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [search, setSearch] = useState('');

  const handleFormSubmit = async (searchFromSearch) => {
    const response = await api.get('/search', {
      params: {
        q: searchFromSearch,
      },
    });
    setVideos(response.data.items);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    console.log(video);
  };

  console.log(selectedVideo);
  return (
    <div className='app'>
      <div className='search'>
        <h1>Video player</h1>
        <Search
          handleFormSubmit={handleFormSubmit}
          setSearch={setSearch}
          search={search}
        />
      </div>
      <div className='booth'>
        <div className='video'>
          <Videodetail
            video={selectedVideo || videos[0]}
            handleFormSubmit={handleFormSubmit}
            handleVideoSelect={handleVideoSelect}
          />
        </div>
        <div className='list'>
          <Videolist videos={videos} handleVideoSelect={handleVideoSelect} />
        </div>
      </div>
    </div>
  );
};

export default App;
