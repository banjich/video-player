import React from 'react';

const Videodetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <iframe
        width='868'
        height='488'
        src={videoSrc}
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
      <div className='details'>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default Videodetail;
