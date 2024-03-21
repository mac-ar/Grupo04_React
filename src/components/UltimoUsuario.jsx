import React from "react";
import { useEffect, useState, useRef } from "react";
const URL_SERVER = "http://localhost:3000"

export function UltimoUsuario() {

const [ultUsuario, setUltUsuario] = useState([])

//Primera Vez
useEffect(() => {
    fetch(`${URL_SERVER}/api/users/last`)
        .then((res) => res.json())
        .then((data) => {            
            setUltUsuario(data.data);
        })
        .catch((error) => console.error(error));
}, []);

 let rutaimag = ultUsuario.img 
 
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Ultimo Usuario Cargado en la Base de Datos
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 17 + "rem" }}
              src= {rutaimag} 
              alt=" Imagen Ultimo Usuario "
            />
          </div>
          <p>
            <strong>
           {ultUsuario.nombre} {ultUsuario.apellido}
           </strong>
          </p>
          <br/>
          <p>
          <strong>
            {ultUsuario.email}
            </strong>
          </p>
          {/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
            View movie detail
          </a> */}
        </div>
      </div>
    </div>
  );
}

