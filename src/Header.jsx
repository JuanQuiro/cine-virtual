import React from "react";
import "./index.css";

export const Header = () => {
  return (
    <nav className="fontSans bg-gray-900 border-b p-2 border-white shadow shadow-gray-300  grid grid-cols-5 items-center justify-center text-center">
      <p
        className="hover:bg-gray-500 text-white"
        onDoubleClick={() => {
          alert("Estas en el inicio");
        }}
      >
        Inicio
      </p>
      <p
        className="hover:bg-gray-500 text-white"
        onDoubleClick={() => {
          alert("Estas en Buscar");
        }}
      >
        Buscar
      </p>
      <p
        className="hover:bg-gray-500 text-white"
        onDoubleClick={() => {
          alert("Estas en Categorias");
        }}
      >
        Categorias
      </p>
      <p
        className="hover:bg-gray-500 text-white"
        onDoubleClick={() => {
          alert("Estas en Servicio");
        }}
      >
        Servicio
      </p>
      <p
        className="hover:bg-gray-500 text-white"
        onDoubleClick={() => {
          alert("Estas en Contacto");
        }}
      >
        Contacto
      </p>
    </nav>
  );
};
