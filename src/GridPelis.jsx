import React from "react";
import GridModalTrailer from "./GridModalTrailer";
import { GetPeliculas } from "./helpers/GetPeliculas";

export const GridPelis = () => {
  const { data } = GetPeliculas();
  const { results } = data;
  console.log(results);

  return (
    <div className=" fontInter gap-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  bg-black text-white pt-10 ">
      {results?.map((user, i) => (
        <div
          className=" hover:shadow-sm p-5 rounded-xl  transition-shadow hover:shadow-slate-400/50 m-3 items-center "
          key={user.id}
        >
          <label htmlFor={user.title}>
            <img
              className="mx-auto w-3/5 mb-5 "
              src={`https://image.tmdb.org/t/p/w220_and_h330_face${user.poster_path}`}
              alt=""
            />
            <h3 className="capitalize text-xl text-yellow-500 font-semibold mb-3">
              {user.title}
            </h3>
            <p className="font-extralight line-clamp-5 ">{user.overview}</p>
            {/** Es un modal */}
            <input
              type="checkbox"
              id={user.title}
              className="modal-toggle shadow-none"
            />
            <div className="modal  ">
              <div className="modal-box shadow-sm shadow-yellow-900 relative">
                <label
                  htmlFor={user.title}
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg text-yellow-500 font-bold">
                  {user.title}
                </h3>
                <p className="py-4">Gracias por ver este proyecto!</p>
              </div>
            </div>
          </label>
        </div>
      ))}
    </div>
  );
};
