import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function CharacterDetails() {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => setCharacter(response.data))
            .catch((error) => console.error(error));
    }, [id]);

    if (!character) return <p>Loading...</p>;

    return (
        <div>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Location: {character.location.name}</p>
            <p>Gender: {character.gender}</p>
        </div>
    );
};