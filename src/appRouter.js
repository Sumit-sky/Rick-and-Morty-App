import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterList from './pages/characterList';
import CharacterDetails from './pages/characterDetails';
import Favorites from './pages/favorties';
import Navbar from './components/navbar';

export default function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<CharacterList />} />
                <Route path="/character/:id" element={<CharacterDetails />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </Router>
    )
}