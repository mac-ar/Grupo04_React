import React from 'react';
//import PropTypes from 'prop-types';

export function CategoriasTarjeta(props) {
    return (
        <div className="col-md-4 mb-4">
            <a href="#">
                <div className={`card border-left-${props.color} shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`h6 mb-0 font-weight-bold text-${props.color} text-uppercase mb-1`}> Categoria {props.nombre}</div>
                                <div className={`text-xl font-weight-bold text-${props.color}-800`}>Cantidad: {props.total_productos}</div>
                            </div>
                            <div className="col-auto">
                                <i className={`${props.icon} fa-2x text-gray-600`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}