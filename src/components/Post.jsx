import React from 'react';

export function Post(props) { /* ({ posts, loading }) => { */
    if (props.loading) {
        return (
            <h1>Loading.....</h1>
        )
    }
    console.log(props.post);
    return (
        <>
            {/* {posts.map((data, index) => (
                <div className='list' key={index}>
                    <p >{data.title}</p>
                </div>
            ))} */}

            <div className="row">
                {props.post.length > 0 && props.post.map((prod, i) => {

                    {/* <div className="col-sm-6 col-md-4 my-4" key={i}> */}
                    <div className="row" key={i}>
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h5 className="m-0 font-weight-bold text-gray-800">{prod.nombre}</h5>{console.log(prod.nombre)}
                            </div>
                            {prod.nombre}
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
                })}
            </div>



        </>
    )
}
