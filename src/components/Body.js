import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import ErrorPage from "./ErrorPage";
import PlayMovies from "./PlayMovies";
import SearchPage from "./SearchPage";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/Browse",
      element: <Browse />,
    },
    {
      path: "/play/:Id",
      element: <PlayMovies />,
    },
    {
      path: "/search/:keyword",
      element: <SearchPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return (
    <div className="hide-scrollbar">
      {/* <Header/> */}
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
