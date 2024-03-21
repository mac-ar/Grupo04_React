import React from "react";
import { SmallCard } from "./SmallCard";
import { useEffect, useState, useRef } from "react";
const URL_SERVER = "http://localhost:3000"

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

// let moviesInDB = {
//   title: "Movies in Data Base",
//   color: "primary",
//   cuantity: 21,
//   icon: "fa-clipboard-list",
// };

// /* <!-- Total awards --> */

// let totalAwards = {
//   title: " Total awards",
//   color: "success",
//   cuantity: "79",
//   icon: "fa-award",
// };

// /* <!-- Actors quantity --> */

// let actorsQuantity = {
//   title: "Actors quantity",
//   color: "warning",
//   cuantity: "49",
//   icon: "fa-user-check",
// };

//let cartProps = [moviesInDB, totalAwards, actorsQuantity];

// MUESTRA LAS TARJETAS EN EL INICIO DE LOS TOTALES DE PRODUCTOS - USUARIOS - CATEGORIAS

export function ContentRowCards() {


  const [producto, setProducto] = useState([])

  useEffect(() => {
		fetch(`${URL_SERVER}/api/product/`)
			.then((res) => res.json())
			.then((data) => {				
				setProducto(data.meta.count);
			})
			.catch((error) => console.error(error));
	}, []);

  const [usuario, setUsuario] = useState([])

  useEffect(() => {
		fetch(`${URL_SERVER}/api/users/`)
			.then((res) => res.json())
			.then((data) => {				
				setUsuario(data.meta.count);
			})
			.catch((error) => console.error(error));
	}, []);

  const [categoria, setCategoria] = useState([])

  useEffect(() => {
		fetch(`${URL_SERVER}/api/product/show`)
			.then((res) => res.json())
			.then((data) => {				
				setCategoria(data.meta.count);
			})
			.catch((error) => console.error(error));
	}, []);

  let ProductoInDB = {
      title: "Productos en Data Base",
      color: "primary",
      cuantity: producto,
      icon: "fa-solid fa-bag-shopping",
    };
    let UsuarioInDB = {
      title: "Usuarios en Data Base",
      color: "success",
      cuantity: usuario,
      icon: "fa-solid fa-users",
    };
    let CategoriaInDB = {
      title: "Categorias en Data Base",
      color: "warning",
      cuantity: categoria,
      icon: "fa-duotone fa-layer-group",
    };

    let cartProps = [ProductoInDB, UsuarioInDB, CategoriaInDB];

  return (
    <div className="row">
      {cartProps.map((prod, i) => {
        return <SmallCard {...prod} key={i} />;
      })}
    </div>
  );
}

