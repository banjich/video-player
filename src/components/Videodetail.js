import React, { useEffect } from 'react';

const Videodetail = ({ video, handleFormSubmit, handleVideoSelect }) => {
  useEffect(() => {
    handleFormSubmit('solomun');
  }, []);

  if (!video) {
    return (
      <div className='loading'>
        <h3>Loading...</h3>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className='video'>
      <iframe
        width='868'
        height='492'
        src={videoSrc}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
      <div className='details'>
        <h2>{video.snippet.title}</h2>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default Videodetail;
