import React from 'react';
//import PropTypes from 'prop-types';

export function CategoriaCard1(props) {
    return (
        /*   <h2>Categoria Nuevo</h2> */
        <div className="col-md-4 mb-4">
            <div className={`card border-left-${props.color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <table>
                                <thead>
                                    {/* <th>Imagen</th> */}

                                    <div className="col-auto">
                                        <th>{props.nombre}</th>
                                        {/* <i className={`${props.icon} fa-2x text-gray-600`}></i> */}
                                    </div>
                                </thead>

                                <tbody>
                                    {
                                        props.productos?.length > 0 && props.productos.map((produ, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td><img src={produ.img} width={'100px'} ></img></td>
                                                    <td>{produ.nombre} </td>
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