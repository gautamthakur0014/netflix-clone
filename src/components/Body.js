import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useDispatch } from "react-redux";
import ErrorPage from "./ErrorPage";

const Body = () => {
  const dispatch = useDispatch();

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
      path: "*",
      element: <ErrorPage/>
    }
  ]);

  return (
    <div className="">
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
