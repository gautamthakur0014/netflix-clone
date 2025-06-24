import React from "react";
import "./videoShimmer.css";

const VideoShimmer = () => {
  return (
    <div className="video-shimmer-wrapper">
      <div className="video-shimmer-content">
        <div className="video-circular-loader">
          <div className="spinner" />
        </div>
        <div className="video-shimmer-controls" />
      </div>
    </div>
  );
};

export default VideoShimmer;
