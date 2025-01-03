import React from "react";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

export default function CharacterCard({ character }) {
  return (
    <Link
      to={`/character/${character.id}`}
      state={{ characterData: character }}
      className="w-max my-2 mx-1 text-white bg-gray-700 rounded-lg hover:shadow-[0_0_15px_0px_rgba(255,255,255,1)] ease-in-out duration-200 transition-all"
    >
      <img
        src={character.image}
        alt={character.name}
        className="rounded-t-lg"
      />
      <div className="p-2">
        <p className="w-max">{character.name}</p>
        <p className="w-max flex items-center">
          {character.status !== "unknown" && (
            <GoDotFill
              className={
                character.status === "Alive" ? `text-green-500` : `text-red-500`
              }
            />
          )}
          {character.status} - {character.species}
        </p>
      </div>
    </Link>
  );
}
