import React from 'react';
import { LastMovieInDb } from './LastMovieInDb';
import { UsuariosInDb } from './UsuariosInDb';
import { UltimoProducto } from './UltimoProducto';
import { UltimoUsuario } from './UltimoUsuario';

export function ContentRowCenter() {
    return (
        <div className="row">

            {/*<!-- ULtimo Producto in DB -->*/}

            <UltimoProducto />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- ULtimo Usuario in DB -->*/}
            <UltimoUsuario />
            {/* <UsuariosInDb /> */}


        </div>
    )
}
