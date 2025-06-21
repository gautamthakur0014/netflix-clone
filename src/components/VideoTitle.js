const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute px-3 mt-20 md:pt-[20%] md:px-12 md:absolute z-20 md:w-screen md:h-screen text-white ">
      {/*bg-gradient-to-r from-black */}
      <h1 className="text-xl  md:text-5xl md:font-bold ">{title}</h1>
      <p className="text-xs w-[95%]  md:py-6 md:w-1/2 md:text-lg ">{overview}</p>
      <div>
        <button className="bg-white text-xs h-6 w-20 md:bg-white rounded-md hover:bg-opacity-70 md:text-lg text-black md:h-10 md:w-28 ">
          Play
        </button>
        <button className="h-6 w-20 bg-gray-400 text-xs text-white md:bg-gray-400 md:text-lg text-white md:h-10 md:w-28 rounded-md mx-2 bg-opacity-100 hover:bg-opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
