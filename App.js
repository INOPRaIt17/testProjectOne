import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './app/components/layout';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <Layout>
            <HomePage />
          </Layout>
        } />
      </Routes>
    </div>
  )
}
