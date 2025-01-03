import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import FilterBar from '../components/filterBar';
import CharacterCard from '../components/characterCard';
import Pagination from '../components/pagination';
import { Loader2 } from 'lucide-react';

export default function CharacterList() {
    const { page, filters } = useSelector((state) => state.app);
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const queryString = useMemo(() => {
        const { status, species } = filters;
        return new URLSearchParams({
            page,
            ...(status && { status }),
            ...(species && { species }),
        }).toString();
    }, [page, filters]);

    const fetchCharacters = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await axios.get(
                `https://rickandmortyapi.com/api/character/?${queryString}`
            );
            setCharacters(response.data.results);
        } catch (err) {
            setError(err.message);
            setCharacters([]);
        } finally {
            setIsLoading(false);
        }
    }, [queryString]);

    useEffect(() => {
        fetchCharacters();
    }, [fetchCharacters]);

    if (isLoading) {
        return (
            <div className="w-full h-screen bg-black flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-white animate-spin" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full h-screen bg-black flex items-center justify-center">
                <div className="text-white text-center">
                    <p className="text-xl mb-4">Oops! Something went wrong</p>
                    <p className="text-gray-400 mb-4">{error}</p>
                    <button
                        onClick={fetchCharacters}
                        className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen bg-black">
            <div className="flex justify-between text-white w-full items-center p-4 max-md:flex-col max-md:items-start">
                <h1 className="text-3xl w-max">Character List</h1>
                <FilterBar />
            </div>
            <div className="w-full flex justify-center items-center flex-wrap">
                {characters.length > 0 ? (
                    <div className="flex w-11/12 flex-wrap justify-evenly my-4 max-sm:w-full gap-4">
                        {characters.map((character) => (
                            <CharacterCard
                                character={character}
                                key={character.id}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-white text-xl py-8">No characters found</p>
                )}
            </div>
            <Pagination />
        </div>
    );
}