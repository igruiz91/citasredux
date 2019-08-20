import React from 'react';
import{borrarCitaAction} from '../actions/citasActions';
import {useDispatch} from 'react-redux';

const Cita = ({cita}) => {

    const dispatch = useDispatch();

    return ( 
        <div className="media mt-3">
            <div className="media-body" key={cita.id}>                
                <h3 className="mt-0">{cita.mascota}</h3>
                <p className="card-text">Nombre Propietario: <span>{cita.propietario}</span></p>
                <p className="card-text">Fecha: <span>{cita.fecha}</span></p>
                <p className="card-text">Hora: <span>{cita.hora}</span></p>
                <p className="card-text">Sintomas:<span>{cita.sintomas}</span></p>
                <button 
                    className="btn btn-danger"
                    onClick={ () => dispatch(borrarCitaAction(cita.id))}>Borrar &times;</button>
            </div>
        </div>
    );
}
 
export default Cita;