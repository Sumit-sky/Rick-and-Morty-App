import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex justify-between text-3xl items-center w-full p-4 py-6 max-sm:py-4 max-sm:text-2xl">
      <Link to={"/"}>Rick and Morty App</Link>
      <Link to={"/favorites"} title="Favorites">
        <FaRegHeart />
      </Link>
    </div>
  );
}
