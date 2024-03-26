import React from 'react';
import { useEffect, useState, useRef } from "react";
const URL_SERVER = "http://localhost:3000"


export function SearchUsuario() {

	const [keyword, setKeyword] = useState('')
	const [usuario, setUsuario] = useState([]);

	const handleChange = (e) => {
		setKeyword(e.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		const searchKeyword = event.target.elements.search.value;
		setKeyword(searchKeyword);
	}

	//Primera Vez
	useEffect(() => {
		fetch(`${URL_SERVER}/api/users/search/?nombre=${keyword}`)
			.then((res) => res.json())
			.then((data) => {
				setUsuario(data.data);
                console.log(data.data);
			})
			.catch((error) => console.error(error));
	}, [keyword]);

	//Actualizar
	useEffect(() => {
	}, [keyword]);

	return (
		<div className="container-fluid">
			<>
				<div className="row my-4">
					<div className="col-12 col-md-6">
						{/* Buscador */}
						<form method="GET" onSubmit={handleSubmit} >
							<div className="form-group">
								<label htmlFor="">Buscar por Nombre de Usuario:</label>
								{/* <input type="text" className="form-control" value={keyword} onChange={handleChange} /> */}
								<input type="text" className="form-control" name="search" />
							</div>
							<button className="btn btn-info">Search</button>
						</form>
					</div>
				</div>
				<div className="row">
					{/* Listado de productos */}
					{
						usuario?.length > 0 && usuario.map((usu, i) => {
							return (
								<div className="col-sm-6 col-md-3 my-4" key={i}>
									<div className="card shadow mb-4">
										<div className="card-header py-3">
											<h5 className="m-0 font-weight-bold text-gray-800">{usu.nombre} {usu.apellido}</h5>
										</div>
										<div className="card-body">
											<div className="text-center">
												<img
													className="img-fluid px-3 px-sm-4 mt-3 mb-4"
													src={usu.foto}
													alt={usu.nombre}
													style={{ width: '90%', height: '400px', objectFit: 'cover' }}
												/>
											</div>											
											<p>E-mail : {usu.email} </p>
											<p>Perfil : {usu.perfil.nombre} </p>
										</div>
									</div>
								</div>
							)
						})
					}
				</div>
				{usuario?.length === 0 && <div className="alert alert-warning text-center">No se encontraron Usuarios</div>}

			</>

		</div>
	)
}