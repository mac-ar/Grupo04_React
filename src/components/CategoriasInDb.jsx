import React from "react";
import { CategoriasTarjeta } from "./CategoriasTarjeta";
import { useEffect, useState, useRef } from "react";
import { CategoriaCard1 } from "./CategoriaCard1";

export function CategoriasInDb() {

    const [categoria, setCategoria] = useState([])
    const [producto1, setProducto1] = useState([])
    const [producto2, setProducto2] = useState([])
    const [producto3, setProducto3] = useState([])

    //Primera Vez
    useEffect(() => {
        fetch("http://localhost:3000/api/product/show")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCategoria(data.data);
                console.log(data.produ1);
                setProducto1(data.produ1);
                setProducto2(data.produ2);
                setProducto3(data.produ3);
            })
            .catch((error) => console.error(error));
    }, []);



    let colors = ['primary', 'warning', 'success'];
    let icons = ['fa-regular fa-square-plus', 'fa-solid fa-briefcase', 'fa-solid fa-recycle'];
    let cates = ['Nuevo', 'Oferta', 'OutLet']
    let productoEnvio = [producto1, producto2, producto3]

    return (
        <>
            <div className="row">
                {categoria.map((cate, i) => {
                    return <CategoriasTarjeta {...cate} key={i} color={colors[i]} icon={icons[i]} catego={cates[i]} />;
                })}
            </div>
            <hr />
            <div className="row">
                {categoria.map((cate, i) => {
                    return <CategoriaCard1 {...cate} key={i} color={colors[i]} catego={cates[i]} icon={icons[i]} productos={productoEnvio[i]} />;
                })}
            </div>

            {/* <div>
                <h2>Categoria Nuevo</h2>
                <table>
                    <thead>
                        <th>Orden</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                    </thead>
                    <hr />
                    <tbody>
                        {
                            producto1?.length > 0 && producto1.map((usu, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{usu.id}</td>
                                        <td>{usu.nombre} </td>
                                        <td>{usu.descripcion}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div> */}
        </>
    )
}