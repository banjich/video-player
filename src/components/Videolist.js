import React from 'react';
import Videoitem from './Videoitem';

const Videolist = ({ videos, handleVideoSelect }) => {
  const renderedVideos = videos.map((video) => {
    return (
      <Videoitem
        key={videos.id.videoId}
        video={video}
        handleVideoSelect={handleVideoSelect}
      />
    );
  });
  return <>{videos && { renderedVideos }}</>;
};

export default Videolist;
