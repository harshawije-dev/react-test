import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root.jsx";
import TodoList from "./views/TodoList.view";
import ErrorPage from "./views/404.view";
import App from "./App";
import StopWatch from "./views/StopWatch";
import TipCalculator from "./views/TipCalculator";
import { Provider } from "react-redux";
import store from "./features/store";
import ThreadsReel from "./views/ThreadsReel";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> },
      { path: "/to-do", element: <TodoList /> },
      { path: "/stop-watch", element: <StopWatch /> },
      { path: "/tip-calculator", element: <TipCalculator /> },
      { path: "/threads-reel", element: <ThreadsReel /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  </React.StrictMode>
);
