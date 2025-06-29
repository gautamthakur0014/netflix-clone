import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isExpanded]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim() === "") return;
    navigate(`/search/${keyword}`);
    setIsExpanded(false);
  };

  return (
    <div className="relative will-change-contents md:w-full max-w-[20rem]">
      {/* 🔍 Search icon (mobile only, position untouched) */}
      <button
        type="button"
        className="md:hidden  z-50 p-0 text-white"
        onClick={() => setIsExpanded(true)}
        aria-label="Open Search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 10.5a7.5 7.5 0 0013.15 6.15z"
          />
        </svg>
      </button>

      {/* ✅ Search Form (unchanged UI) */}
      <form
        onSubmit={handleSubmit}
        className={`
          flex items-center border-b border-gray-500 focus-within:border-red-600
           max-w-[30rem] mx-auto h-10
          ${
            isExpanded
              ? "fixed top-[20%] left-1/2 -translate-x-1/2 w-[80%] z-50"
              : "hidden md:flex"
          }
        `}
        style={{
          backgroundColor: "transparent",
          backdropFilter: isExpanded ? "blur(8px)" : "none",
        }}
      >
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Movies"
          className="flex-grow bg-transparent text-white placeholder-gray-400 outline-none px-2 py-1"
        />
        <button
          type="submit"
          className="text-red-600 font-semibold hover:text-white transition"
        >
          Search
        </button>
      </form>

      {/* ✅ Background blur + click-to-close overlay */}
      {isExpanded && (
        <div
          onClick={() => setIsExpanded(false)}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 md:hidden"
        />
      )}
    </div>
  );
};

export default Search;
