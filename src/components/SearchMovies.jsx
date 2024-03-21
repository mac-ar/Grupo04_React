import React from 'react';
import { useEffect, useState, useRef } from "react";
//import noPoster from '../assets/images/no-poster.jpg';

export function SearchMovies() {

		// Credenciales de API
	const apiKey = 'fe783522'; // Intenta poner cualquier cosa antes para probar

	const [keyword, setKeyword] = useState('batman')
	const [movies, setMovies] = useState([]);
	//const keywordRef = useRef()	
	//console.log(keywordRef);

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
		fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`)
			.then((res) => res.json())
			.then((data) => {
				console.log('Se cargo por primera vez');
				setMovies(data.Search);
			})
			.catch((error) => console.error(error));
	}, [keyword]);

	//Actualizar
	useEffect(() => {
		console.log('Se actualizó');
	}, [keyword]);

	useEffect(() => {
		return () => console.log('Se desmonto');
	}, []);

	return (
		<div className="container-fluid">
			{
				apiKey !== '' ?
					<>
						<div className="row my-4">
							<div className="col-12 col-md-6">
								{/* Buscador */}
								<form method="GET" onSubmit={handleSubmit} >
									<div className="form-group">
										<label htmlFor="">Buscar por título:</label>
										{/* <input type="text" className="form-control" value={keyword} onChange={handleChange} /> */}
										<input type="text" className="form-control" name="search" />
									</div>
									<button className="btn btn-info"  >Search</button>
								</form>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<h2>Películas para la palabra: {keyword}</h2>
							</div>
							{/* Listado de películas */}
							{
								movies?.length > 0 && movies.map((movie, i) => {
									return (
										<div className="col-sm-6 col-md-3 my-4" key={i}>
											<div className="card shadow mb-4">
												<div className="card-header py-3">
													<h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
												</div>
												<div className="card-body">
													<div className="text-center">
														<img
															className="img-fluid px-3 px-sm-4 mt-3 mb-4"
															src={movie.Poster}
															alt={movie.Title}
															style={{ width: '90%', height: '400px', objectFit: 'cover' }}
														/>
													</div>
													<p>{movie.Year}</p>
												</div>
											</div>
										</div>
									)
								})
							}
						</div>
						{movies?.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>}
					</>
					:
					<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default SearchMovies;
