import React from 'react';
import { useEffect, useState, useRef } from "react";
import "./ProductosInDb.css";

export function ProductosInDb() {

    const [producto, setProducto] = useState([]);

    //Primera Vez
    useEffect(() => {
        fetch("http://localhost:3000/api/product")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducto(data.data);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
            <div><h1>Listado de Productos</h1></div>
            <table>
                <tr>
                    <th>Orden</th>
                    <th>Producto</th>
                    <th>Descripcion</th>
                </tr>

                {/* Listado de películas */}
                {
                    producto?.length > 0 && producto.map((prod, i) => {
                        return (
                            <tr key={i}>
                                <td>{prod.id}</td>
                                <td>{prod.nombre}</td>
                                <td>{prod.descripcion}</td>
                            </tr>
                        )
                    })
                }

            </table>

        </>
    )
}