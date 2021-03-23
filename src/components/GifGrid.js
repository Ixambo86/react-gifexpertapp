import React from "react";
import { getGifs } from "../helpers/getGifs";
import useFetchGifs from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ categoria }) => {

  const {data, loading} = useFetchGifs(categoria);

  return (
    <>
      <h3 className="card animate__animated animate__lightSpeedInRight animate__delay-2s">{categoria}</h3>

      {loading && <p className="animate__animated animate__flash">Cargando...</p> }

      <div className="card-grid">
        {data.map((imagen) => (
          <GifGridItem key={imagen.id} {...imagen} />
        ))}
      </div>
    </>
  );
};
