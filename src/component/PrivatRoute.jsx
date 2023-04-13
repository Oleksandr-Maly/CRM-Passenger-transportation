import { Route, Navigate, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UsersPage } from '../pages/UsersPage';
import { useEffect } from 'react';
import { AdminPage } from '../pages/AdminPage';

export const PrivateRoute = ({ roles, ...rest }) => {
  const currentUser = useSelector(state => state.user); 

  const isAuthenticated = !!currentUser.email;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (currentUser.role === 'admin') {
    return <AdminPage />
  }

return <UsersPage />;
};

