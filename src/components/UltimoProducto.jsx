import React from "react";
import { useEffect, useState, useRef } from "react";
const URL_SERVER = "http://localhost:3000"

export function UltimoProducto() {

const [ultProducto, setUltProducto] = useState([])

//Primera Vez
useEffect(() => {
    fetch(`${URL_SERVER}/api/product/last`)
        .then((res) => res.json())
        .then((data) => {            
            setUltProducto(data.data);
        })
        .catch((error) => console.error(error));
}, []);

 let rutaimag = `${URL_SERVER}/img/product/${ultProducto.img}` 
 
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Ultimo Producto Cargado en la Base de Datos
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 40 + "rem" }}
              src= {rutaimag} 
              alt=" Imagen Ultimo Producto "
            />
          </div>
          <p><strong>Producto</strong></p>
          <p>
           {ultProducto.nombre}
          </p>
          <br/>
          <p><strong>Descripcion</strong></p>
          <p>
           {ultProducto.descripcion}
          </p>
          <br/>
          <p><strong>Especificaciones Tecnicas</strong></p>
          <p>
            {ultProducto.especificaciones}
          </p>
          {/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
            View movie detail
          </a> */}
        </div>
      </div>
    </div>
  );
}

