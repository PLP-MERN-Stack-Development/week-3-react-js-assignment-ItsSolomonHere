
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '../context/ThemeContext';
import Layout from '../components/Layout';
import Home from './Home';
import Tasks from './Tasks';
import Posts from './Posts';

const Index = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default Index;
