import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import InfoPage from './components/InfoPage';
import QuizPage from './components/QuizPage';
import GlossaryPage from './components/GlossaryPage';
import Navbar from './components/Navbar'; 
//code above shows all imports of each web page and their respective files in app.js
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/glossary" element={<GlossaryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
//code above shows the routes for each page so that it connects the page of front end together.