import React from 'react';
//import PropTypes from 'prop-types';

export function PerfilCard1(props) {
    return (
        /*   <h2>Categoria Nuevo</h2> */
        <div className="col-md-6 mb-4">
            <div className={`card border-left-${props.color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <table>
                                <thead>
                                    {/* <th>Imagen</th> */}

                                    <div className="col-auto">
                                        <th>{props.nombre} {props.apellido}</th>
                                        {/* <i className={`${props.icon} fa-2x text-gray-600`}></i> */}
                                    </div>
                                </thead>

                                <tbody>
                                    {
                                        props.usuarios?.length > 0 && props.usuarios.map((usu, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td><img src={usu.img} width={'100px'} ></img></td>
                                                    <td>{usu.nombre}  {usu.apellido}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}