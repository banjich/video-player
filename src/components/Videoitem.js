import React from 'react';

const Videoitem = ({ video, handleVideoSelect }) => {
  return (
    <div onClick={() => handleVideoSelect(video)}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      {video.snippet.title}
    </div>
  );
};

export default Videoitem;
