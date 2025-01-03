import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage, toggleFavorite } from '../redux/store';
import axios from 'axios';
import FilterBar from '../components/filterBar';

export default function CharacterList() {
    const dispatch = useDispatch();
    const { page, filters, favorites } = useSelector((state) => state.app);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const { status, species } = filters;
        const query = new URLSearchParams({
            page,
            ...(status && { status }),
            ...(species && { species }),
        }).toString();

        axios
            .get(`https://rickandmortyapi.com/api/character/?${query}`)
            .then((response) => setCharacters(response.data.results))
            .catch((error) => console.error(error));
    }, [page, filters]);

    return (
        <div className='w-full'>
            <div className='flex justify-between w-full'>
                <h1 className='text-3xl'>Character List</h1>
                <FilterBar />
            </div>
            <div className="flex w-full flex-wrap">
                {characters.map((character) => (
                    <div key={character.id} className='w-max m-4'>
                        <img src={character.image} alt={character.name} />
                        <p className='w-max'>{character.name}</p>
                        <p className='w-max'>{character.status}</p>
                        <button onClick={() => dispatch(toggleFavorite(character.id))}>
                            {favorites.includes(character.id) ? 'Unfavorite' : 'Favorite'}
                        </button>
                    </div>
                ))}
            </div>
            <div>
                <button disabled={page === 1} onClick={() => dispatch(setPage(page - 1))}>
                    Previous
                </button>
                <button onClick={() => dispatch(setPage(page + 1))}>
                    Next
                </button>
            </div>
        </div>
    );
};