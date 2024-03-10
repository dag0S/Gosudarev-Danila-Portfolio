import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import MainPage from "./pages/MainPage/MainPage";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import WorksPage from "./pages/WorksPage/WorksPage";
import WorkPage from "./pages/WorkPage/WorkPage";

import "./scss/main.scss";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
