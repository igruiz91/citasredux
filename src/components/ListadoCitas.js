import React from 'react';
import {useSelector} from 'react-redux';

import Cita from './Cita';

//mensage condicional



const ListadoCitas = () => {

    //obtner las citas del state
    const citas = useSelector((state) => state.citas);

    const mensaje= Object.keys(citas.citas).length === 0 ? 'No Hay citas' : 'Administre las citas Aqui';

    

    return ( 
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">
                    {mensaje}
                </h2>
                <div className="lista-citas">
                    {citas.citas.map((cita) => (
                        <Cita 
                            key={cita.id}
                            cita={cita}/>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default ListadoCitas;