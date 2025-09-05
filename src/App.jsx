import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import RegistrationPage from './RegistrationPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegistrationPage />} />
    </Routes>
  );
}