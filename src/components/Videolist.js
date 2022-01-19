import React from 'react';
import Videoitem from './Videoitem';

const Videolist = ({ videos, handleVideoSelect }) => {
  return (
    <>
      <div>
        {videos &&
          videos.map((video) => {
            return (
              <Videoitem
                video={video}
                handleVideoSelect={handleVideoSelect}
                key={video.id.videoId}
              />
            );
          })}
      </div>
    </>
  );
};

export default Videolist;
