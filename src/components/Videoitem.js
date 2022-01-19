import React from 'react';

const Videoitem = ({ video, handleVideoSelect }) => {
  return (
    <div className='videos'>
      <div onClick={() => handleVideoSelect(video)}>
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.description}
        />
      </div>
      {video.snippet.title}
    </div>
  );
};

export default Videoitem;
