// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CategorySelector from './components/CategorySelector';
import VideoList from './components/VideoList';

const App = () => {
  const categories = ['social', 'hardware', 'software', 'news'];

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Senior Tech</h1>
        </header>
        <Routes>
  <Route path="/" element={<CategorySelector categories={categories} />} />
  <Route path="/category/:categoryName" element={<VideoList />} />
</Routes>

      </div>
    </Router>
  );
}

export default App;