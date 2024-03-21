import React from 'react';
import { useEffect, useState, useRef } from "react";
import "./ProductosInDb.css";
const URL_SERVER = "http://localhost:3000"

export function UsuariosInDb() {

    const [usuario, setUsuario] = useState([]);

    //Primera Vez
    useEffect(() => {
        fetch(`${URL_SERVER}/api/users`)
            .then((res) => res.json())
            .then((data) => {                
                setUsuario(data.data);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
            <div><h1>Listado de Usuarios</h1></div>
            <table>

                <tr>
                    <th>Orden</th>
                    <th>Nombre Completo</th>
                    <th>Email</th>
                </tr>


                {/* Listado de películas */}
                {
                    usuario?.length > 0 && usuario.map((usu, i) => {
                        return (
                            <tr key={i}>
                                <td>{usu.id}</td>
                                <td>{usu.nombre}  {usu.apellido}</td>
                                <td>{usu.email}</td>
                            </tr>
                        )
                    })
                }



            </table>

        </>
    )
}