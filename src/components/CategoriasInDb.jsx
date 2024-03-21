import React from "react";
import { CategoriasTarjeta } from "./CategoriasTarjeta";
import { useEffect, useState, useRef } from "react";

export function CategoriasInDb() {

    const  [categoria, setCategoria]  = useState([])

    //Primera Vez
    useEffect(() => {
        fetch("http://localhost:3000/api/product/show")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCategoria(data.data);
            })
            .catch((error) => console.error(error));
    }, []);

    let colors = ['primary', 'warning', 'success'];
    let icons = ['fa-regular fa-square-plus', 'fa-solid fa-briefcase', 'fa-solid fa-recycle'];

    return (
        <>
            <div className="row">
                {categoria.map((cate, i) => {
                    return <CategoriasTarjeta {...cate} key={i} color={colors[i]} icon = {icons[i]} />;
                })}
            </div>
        </>
    )
}