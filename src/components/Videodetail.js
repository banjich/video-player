import React, { useEffect } from 'react';

const Videodetail = ({ video, handleFormSubmit, handleVideoSelect }) => {
  useEffect(() => {
    handleFormSubmit('solomun');
    handleVideoSelect({
      kind: 'youtube#searchResult',
      etag: 'qo9MS6GDvnMeNt3MkEDoAENczi8',
      id: {
        kind: 'youtube#video',
        videoId: 'QHDRRxKlimY',
      },
      snippet: {
        publishedAt: '2018-05-24T13:54:53Z',
        channelId: 'UCPKT_csvP72boVX0XrMtagQ',
        title: 'Solomun @ Théâtre Antique d&#39;Orange in France for Cercle',
        description:
          "Solomun playing his unique DJ set in this amazing roman theater: Théâtre Antique d'Orange for Cercle. ☞ Subscribe our channel ...",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/QHDRRxKlimY/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/QHDRRxKlimY/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/QHDRRxKlimY/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Cercle',
        liveBroadcastContent: 'none',
        publishTime: '2018-05-24T13:54:53Z',
      },
    });
  }, []);

  if (!video) {
    return <div>{/* do nothing */}</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className='video'>
      <iframe
        width='868'
        height='488'
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
