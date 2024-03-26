import React from "react";
import { PerfilesTarjeta } from "./PerfilesTarjeta";
import { useEffect, useState, useRef } from "react";
import { PerfilCard1 } from "./PerfilCard1";

export function PerfilesinDb() {

    const [perfil, setPerfil] = useState([])
    const [usuario1, setUsuario1] = useState([])
    const [usuario2, setUsuario2] = useState([])

    //Primera Vez
    useEffect(() => {
        fetch("http://localhost:3000/api/users/show")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPerfil(data.data);
                setUsuario1(data.usu1);
                console.log(data.usu1);
                setUsuario2(data.usu2);
                console.log(data.usu2);
            })
            .catch((error) => console.error(error));
    }, []);



    let colors = ['primary', 'success'];
    let icons = ['fa-solid fa-screwdriver-wrench', 'fa-solid fa-briefcase'];
    let perfiles = ['administrador', 'cliente']
    let usuarioEnvio = [usuario1, usuario2]

    return (
        <>
            <div className="row">
                {perfil.map((cate, i) => {
                    return <PerfilesTarjeta {...cate} key={i} color={colors[i]} icon={icons[i]} perfiles={perfiles[i]} />;
                })}
            </div>
            <hr />
            <div className="row">
                {perfil.map((cate, i) => {
                    return <PerfilCard1 {...cate} key={i} color={colors[i]} perfiles={perfiles[i]} icon={icons[i]} usuarios={usuarioEnvio[i]} />;
                })}
            </div>


        </>
    )
}