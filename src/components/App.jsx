import React, { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import { AppBar } from './AppBar';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { authOperations } from 'redux/auth';
import PrivatRoute from './PrivetRoute';
import PublicRoute from './PublicRoute';
const ContactPage = lazy(() => import('pages/ContactPage'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />

      <Routes>
        <Route path="/" element={<PublicRoute component={<HomePage />} />} />
        <Route
          path="/register"
          element={
            <PublicRoute
              restricted
              redirectTo="/contacts"
              component={<Register />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute
              restricted
              redirectTo="/contacts"
              component={<Login />}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivatRoute redirectTo="/login" component={<ContactPage />} />
          }
        />
      </Routes>
    </div>
  );
};