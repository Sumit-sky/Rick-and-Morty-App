import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterList from './pages/characterList';
import CharacterDetails from './pages/characterDetails';
import Favorites from './pages/favorties';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CharacterList />} />
                <Route path="/character/:id" element={<CharacterDetails />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </Router>
    )
}