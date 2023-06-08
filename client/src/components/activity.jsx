import React from "react";
import { useState } from "react";


const Activity = () => {
  const [hecho, cambiarHecho] = useState(false);
  const onClick = () => {
    cambiarHecho(!hecho);
  }

  return (
    <div className={hecho ? "w-[480px] flex flex-col items-center max-w-[480px] bg-green-200 border-2 rounded border-black mt-4" : "rounded flex flex-col max-w-[480px] border-2 border-black items-center w-[480px] mt-4"}>
      <h2 className="border-b-2 border-black w-full text-center text-lg">Titulo</h2>
      <p className="border-b-2 border-black w-full text-center p-4">Descripcion</p>
      <span>Estado</span>
      <button type="button" className="w-full bg-black border text-white rounded-sm p-2 border-black hover:border-white" onClick={onClick}>{hecho ? 'Deshacer': 'Hacer'}</button>
    </div>
  )
}

export default Activity;
