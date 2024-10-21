// src/components/VideoList.js
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';

const VideoList = () => {
  const { categoryName } = useParams();
  const videos = {
    social: [
      { title: 'WhatsApp Guide', url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U' },
      { title: 'Facebook Tutorial', url: 'https://www.youtube.com/watch?v=lX6JcybgDFo' },
      // ... more social videos
    ],
    // ... other categories
  };

  const categoryVideos = videos[categoryName] || [];

  return (
    <div>
      <h2>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Videos</h2>
      <div className="video-list">
        {categoryVideos.length > 0 ? (
          categoryVideos.map((video, index) => (
            <div key={index} className="video-item">
              <h3>{video.title}</h3>
              <VideoPlayer url={video.url} />
            </div>
          ))
        ) : (
          <p>No videos available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default VideoList;