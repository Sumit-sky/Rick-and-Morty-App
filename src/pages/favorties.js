import React from 'react';
import { useSelector } from 'react-redux';
import CharacterCard from '../components/characterCard';

export default function Favorites() {
    const favorites = useSelector((state) => state.app.favorites);

    if (favorites.length === 0) {
        return <p className='text-center text-3xl'>No favorites yet!</p>;
    }

    return (
        <div className='w-full bg-black min-h-[90vh]'>
            <div className='w-full flex flex-col justify-center items-center py-2'>
                <h1 className='text-white text-left w-11/12 text-3xl'>Your Favorites</h1>
                <div className="flex w-11/12 flex-wrap justify-evenly my-4">
                    {favorites.map((character) => (
                        <CharacterCard character={character} key={character.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}