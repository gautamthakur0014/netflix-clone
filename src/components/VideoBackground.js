import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import ReactPlayer from "react-player/youtube";
import { useEffect, useState } from "react";
import VideoShimmer from "./Shimmer/VideoShimmer";

const VideoBackground = ({ movieId, controls }) => {
  useMovieTrailer(movieId);

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (hasError) {
      console.warn("Video unavailable — reloading...");
      const timeout = setTimeout(() => {
        window.location.reload(); // or replace with fallback UI
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [hasError]);

  if (!trailerVideo?.key) {
    return <VideoShimmer/>;
  }

  const videoKey = trailerVideo.key;
  const videoUrl = `https://www.youtube.com/watch?v=${videoKey}`;

  // console.log(trailerVideo.name, " === ", videoKey);

  return (
    <div className="relative z-10 w-full aspect-video md:h-auto max-h-screen">
      <ReactPlayer
        url={videoUrl}
        playing
        muted
        loop
        controls={controls}
        width="100%"
        height="100%"
        onError={() => setHasError(true)}
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1,
              rel: 0,
              autoplay: 1,
              playlist: videoKey,
            },
          },
        }}
      />
    </div>
  );
};

export default VideoBackground;
