import {RouterProvider, createBrowserRouter} from "react-router-dom";

import {routes} from "./routes";

const browserRouter = createBrowserRouter(routes);

const AppRouter = () => <RouterProvider router={browserRouter} />;

export default AppRouter;