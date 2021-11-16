import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  const videoTitle = video.snippet.title;
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={videoTitle}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header" key={video.id.videoId}>
          {videoTitle}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
