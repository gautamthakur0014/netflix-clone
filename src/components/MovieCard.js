import { IMG_CDN_URL } from "../utils/const";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-40 md:w-52 m-4 group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105">
      {/* Image */}
      <img
        alt="Movie Poster"
        src={IMG_CDN_URL + posterPath}
        className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:blur-sm"
      />

      {/* Dark Overlay on Hover */}
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* SVG Play Button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <button className="bg-white text-black p-2  rounded-full shadow-lg hover:scale-110 transition-transform duration-200">
        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 md:h-10 md:w-10 text-black inline-block"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6.5 5.5v9l8-4.5-8-4.5z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
