import {createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";

const myCreateRouter = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement:<ErrorPage/>,
        children: [
            {
                index: true,
                element:<Home/>
            }
        ]
    
    },
]);

export default myCreateRouter;