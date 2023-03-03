import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const GetPeliculas = () => {
  const [data, setData] = useState({});
  const apiKey = "d303b552b22ea9d6ab4338e83de77797";
  const apiTopPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`;
  useEffect(() => {
    fetch(apiTopPopular)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return { data };
};
