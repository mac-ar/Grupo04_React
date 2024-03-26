import React from 'react';
import { useEffect, useState, useRef } from "react";
const URL_SERVER = "http://localhost:3000"

import { Post } from './Post';
import { Pagination } from './Pagination';


export function SearchProducto() {

	const [keyword, setKeyword] = useState('')
	const [producto, setProducto] = useState([]);

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
		fetch(`${URL_SERVER}/api/product/search/?nombre=${keyword}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProducto(data.data);
			})
			.catch((error) => console.error(error));
	}, [keyword]);

	//Actualizar
	/* useEffect(() => {
	}, [keyword]); */

	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPge, SetPostsPerPage] = useState(3);

	useEffect(() => {
		/* const fetchPosts = async () => { */
		setLoading(true);

		fetch(`${URL_SERVER}/api/product/search/?nombre=${keyword}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setPosts(data.data);
				setLoading(false);
			})
			.catch((error) => console.error(error));
		/* fetchPosts();
	} */
	}, [keyword])

	const indexOfLastPost = currentPage * postsPerPge;
	const indexOfFirstPost = indexOfLastPost - postsPerPge;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
	
	const handlePagination = (pageNumber) => {
		setCurrentPage(pageNumber);
	}

	return (
		<div className="container-fluid">
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
							<button className="btn btn-info">Search</button>
						</form>
					</div>
				</div>
				{/* <div className="row">
					{/* Listado de productos */}
				{/*
						producto?.length > 0 && producto.map((prod, i) => {
							 return (
								<div className="col-sm-6 col-md-4 my-4" key={i}>
									<div className="card shadow mb-4">
										<div className="card-header py-3">
											<h5 className="m-0 font-weight-bold text-gray-800">{prod.nombre}</h5>
										</div>
										<div className="card-body">
											<div className="text-center">
												<img
													className="img-fluid px-3 px-sm-4 mt-3 mb-4"
													src={prod.foto}
													alt={prod.nombre}
													style={{ width: '90%', height: '400px', objectFit: 'cover' }}
												/>
											</div>
											<p>Precio Ctdo : ${prod.precio}</p>
										</div>
									</div>
								</div>
							) 
						})
					}
				</div> 

				<div className="row">
					{posts?.length > 0 && posts.map((prod, i) => {
						return <Post {...prod} key={i} post={currentPosts} loading={loading} />;
					})}
				</div>*/}

				 
				{producto?.length === 0 && <div className="alert alert-warning text-center">No se encontraron Productos</div>}

				<div className='container'>
					{/* <Post posts={currentPosts} loading={loading} /> */}
					<Post  post={currentPosts} loading={loading} />
					<Pagination length={posts.length} postsPerPage={postsPerPge} handlePagination={handlePagination} currentPage={currentPage} />
				</div>
			</>

		</div>
	)
}