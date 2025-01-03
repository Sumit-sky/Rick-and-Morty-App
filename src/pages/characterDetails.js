import React from 'react';
import { toggleFavorite } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export default function CharacterDetails() {
    const location = useLocation();
    const character = location.state?.characterData;
    const dispatch = useDispatch();
    const { favorites } = useSelector((state) => state.app);
    return (
        <div className='bg-black w-full min-h-[100vh] text-white flex justify-center flex-col items-center'>
            <div className='xl:w-9/12 flex justify-between p-4 w-full max-lg:flex-col max-lg:items-center'>
                <img src={character.image} alt={character.name} className='rounded-md lg:w-1/2 w-10/12' />
                <div className='w-5/12 lg:text-3xl text-2xl flex flex-col max-lg:w-10/12 max-lg:items-center'>
                    <div className='flex flex-col items-start max-lg:justify-center w-full text-wrap'>
                        <p className='p-1'>Name:     {character.name}</p>
                        <p className='p-1'>Species:  {character.species}</p>
                        <p className='p-1'>Gender:   {character.gender}</p>
                        <p className='p-1'>Status:   {character.status}</p>
                        <p className='p-1'>Location: {character.location.name}</p>
                        <p className='p-1'>Origin:   {character.origin.name}</p>
                    </div>
                    <button className='bg-white rounded-md w-full my-4 p-2 text-black text-xl lg:text-2xl' onClick={() => dispatch(toggleFavorite(character))}>
                        {favorites.some((fav) => fav.id === character.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                </div>
            </div>
        </div>
    );
};