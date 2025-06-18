import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-white h-screen w-screen flex justify-center items-center flex-col">
      <Link to="/">
        <button className="text-3xl bg-violet-700 rounded-xl p-3 mb-20 ">
          Home
        </button>
      </Link>
      <h1 className="text-8xl ">ERROR - 404</h1>
      <h2 className="text-5xl mt-10">Page Not Found</h2>
    </div>
  );
};

export default ErrorPage;
