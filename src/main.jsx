import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import UsersDetails from "./Components/UsersDetails";
import PersonalDetails from "./Components/PersonalDetails";
import Location from "./Components/Location";
import MembershipInfo from "./Components/MembershipInfo";
import NoMatch from "./Components/NoMatch";
import Users, { loader as rootLoader } from "./Components/Users";
// import ErrorBoundary from "./Components/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Users />,
    loader: rootLoader,
  },

  {
    path: "/userDetails/:id",
    loader: rootLoader,
    element: <UsersDetails />,
    children: [
      {
        path: "personal",
        element: <PersonalDetails />,
      },
      {
        path: "location",
        element: <Location />,
      },
      {
        path: "member",
        element: <MembershipInfo />,
      },
    ],
  },

  {
    path: "*",
    element: <NoMatch />,
  },
]);

ReactDOM.render(
  /*  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>, */

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,

  document.getElementById("root")
);
