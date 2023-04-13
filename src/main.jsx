import "./index.scss";

import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, Navigate, redirect, RouterProvider} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import './firebase'

import ErrorPage from "./pages/ErrorPage";
import { UsersPage } from "./pages/UsersPage";
import { SignUpPage } from "./pages/SignUpPage";
import { LoginPage } from "./pages/LoginPage";

import { TestLoginPage } from "./pages/TestLoginPage";
import { PrivateRoute } from './component/PrivatRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/user-page" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/testLogin",
    element: <TestLoginPage />,
  },
  {
    path: 'user-page',
    element: <PrivateRoute roles={['admin', 'user']} element={<UsersPage />} />,
    // children: [
    //   { path: '/', element: <UsersDashboardPage /> },
    //   { path: 'profile', element: <UserProfilePage /> }
    // ]
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
