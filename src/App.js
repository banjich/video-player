import React, { useState } from 'react';
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
    setVideos({ videos: response.data.items });
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo({ selectedVideo: video });
  };

  return (
    <div className='app'>
      <header>Video player</header>
      <div className='search'>
        <Search
          handleFormSubmit={handleFormSubmit}
          setSearch={setSearch}
          search={search}
        />
      </div>
      <div className='detail'>
        <Videodetail video={selectedVideo} />
      </div>
      <div className='list'>
        <Videolist videos={videos} handleVideoSelect={handleVideoSelect} />
      </div>
    </div>
  );
};

export default App;
