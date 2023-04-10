import "./index.scss";

import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, Navigate, redirect, RouterProvider} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import './firebase'

import ErrorPage from "./pages/ErrorPage";
import UsersPage from "./pages/UsersPage";
import { SignUpPage } from "./pages/SignUpPage";
import { LoginPage } from "./pages/LoginPage";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/user-page" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user-page",
    element: <UsersPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)



// example of path with children: 
// {
//   path: "/",
//   element: <SignUpPage />,
//   errorElement: <ErrorPage />,
//   children: [
//     {
//       path: "login",
//       element: <Login />,
//     },
//     {
//       path: "signup",
//       element: <SignUp />,
//     },
//   ],
// },