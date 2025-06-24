import React from "react";
import "./movieCardShimmer.css" ;


const MovieCardShimmer = () => {

  return (
    <div className="shimmer-card">
      <div className="shimmer-poster">
        <div className="shimmer-effect" />
      </div>

      <div className="shimmer-play-button">
        <div className="shimmer-circle">
          <svg className="shimmer-icon" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.5 5.5v9l8-4.5-8-4.5z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MovieCardShimmer;
