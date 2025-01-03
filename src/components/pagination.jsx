import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../redux/store";

export default function Pagination() {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.app);
  return (
    <div className="w-full flex justify-center items-center text-white">
      <button
        disabled={page === 1}
        onClick={() => dispatch(setPage(page - 1))}
        className="m-2 w-[80px] bg-white rounded-md p-2 text-black"
      >
        Previous
      </button>
      <button
        onClick={() => dispatch(setPage(page + 1))}
        className="m-2 w-[80px] bg-white rounded-md p-2 text-black"
      >
        Next
      </button>
    </div>
  );
}
