import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import MainLayout from "./layouts/MainLayout/MainLayout";
import MainPage from "./pages/MainPage/MainPage";
import WorksPage from "./pages/WorksPage/WorksPage";
import WorkPage from "./pages/WorkPage/WorkPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import AboutMePage from "./pages/AboutMePage/AboutMePage";
import NotFound from "./pages/NotFound/NotFound";

import "./scss/main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/works",
        element: <WorksPage />,
      },
      {
        path: "/works/:id",
        element: <WorkPage />,
      },
      {
        path: "/contacts",
        element: <ContactsPage />,
      },
      {
        path: "/about-me",
        element: <AboutMePage />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
