import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId }) => {
  const navigate = useNavigate();
  
  return (
    <div className="absolute pt-[20%] sm:pt-[35%] h-screen px-3 md:pt-[30%] md:px-7 md:absolute z-20 md:w-screen  text-white ">
      {/*bg-gradient-to-r from-black */}
      <h1 className="text-xl mb-2 md:mb-0 md:text-4xl md:font-bold lg:text-5xl ">
        {title}
      </h1>
      <p className="text-xs w-[90%] mb-3 md:mb-0 md:py-6 md:w-3/4 lg:text-xl md:text-base ">
        {overview}
      </p>
      <div>
        <button
          className="bg-white text-xs h-6 w-16 md:bg-white rounded-md hover:bg-opacity-70 md:text-base text-black lg:h-10 lg:w-28 lg:text-lg md:h-8 md:w-20 "
          onClick={() => navigate(`/play/${movieId}`)}
        >
          Play
        </button>
        <button
          className="h-6 w-16 bg-gray-400 text-xs md:bg-gray-400 md:text-base text-white md:h-8 md:w-20 rounded-md mx-2 bg-opacity-100 hover:bg-opacity-70 lg:h-10 lg:w-28 lg:text-lg"
          onClick={() => navigate(`/play/${movieId}`)}
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
