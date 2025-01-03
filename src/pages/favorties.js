import React from 'react';
import { useSelector } from 'react-redux';

export default function Favorites() {
    const favorites = useSelector((state) => state.app.favorites);

    if (favorites.length === 0) {
        return <p>No favorites yet!</p>;
    }

    return (
        <div>
            <h1>Your Favorites</h1>
            <ul>
                {favorites.map((id) => (
                    <li key={id}>Favorite Character ID: {id}</li>
                ))}
            </ul>
        </div>
    );
}