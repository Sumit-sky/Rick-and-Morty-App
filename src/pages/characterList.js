import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import FilterBar from '../components/filterBar';
import CharacterCard from '../components/characterCard';
import Pagination from '../components/pagination';
import { Loader2 } from 'lucide-react';

export default function CharacterList() {
    const { page, filters } = useSelector((state) => state.app);
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const { status, species } = filters;
        const query = new URLSearchParams({
            page,
            ...(status && { status }),
            ...(species && { species }),
        }).toString();
        setIsLoading(true);
        axios
            .get(`https://rickandmortyapi.com/api/character/?${query}`)
            .then((response) => setCharacters(response.data.results))
            .catch((error) => console.error(error));
        setIsLoading(false);
    }, [page, filters]);

    if (isLoading) {
        return (
            <div className="w-full h-screen bg-black flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-white animate-spin" />
            </div>
        );
    }

    return (
        <div className='w-full bg-black'>
            <div className='flex justify-between text-white w-full items-center p-4 max-md:flex-col max-md:items-start'>
                <h1 className='text-3xl w-max'>Character List</h1>
                <FilterBar />
            </div>
            <div className='w-full flex justify-center items-center flex-wrap'>
                <div className="flex w-11/12 flex-wrap justify-evenly my-4">
                    {characters.map((character) => (
                        <CharacterCard character={character} key={character.id} />
                    ))}
                </div>
            </div>
            <Pagination />
        </div>
    );
};