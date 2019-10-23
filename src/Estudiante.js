import React from 'react';
import './Estudiante.css';

class Estudiante extends React.Component {

    render() {

        const estudiante = this.props.estudiante;
        const fechas = [];

        estudiante.asistencias.forEach(asistencia => {
            if ((this.props.institucion === "Todas" || this.props.institucion === asistencia.institucion)
                && (this.props.fechaInicio === "" || this.props.fechaInicio <= asistencia.fecha)
                && (this.props.fechaFin === "" || this.props.fechaFin >= asistencia.fecha))
                fechas.push(asistencia.fecha);
        });

        return (
            <div className="card mb-3" style={{ maxWidth: 100 + "%" }}>
                <div className="card-header">
                    <h5>{estudiante.nombre + " " + estudiante.apellido}</h5>
                </div>
                <div className="card-body text-dark">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div><strong>Id:</strong> {estudiante.id}</div>
                            <div><strong>Área:</strong> {estudiante.area}</div>
                            <div><strong>Edad:</strong> {estudiante.edad}</div>
                            <div><strong>Teléfono:</strong> {estudiante.telefono}</div>
                        </div>
                        <div className="col-md-8 col-12">
                            <div><strong>Asistencias: {fechas.length}</strong></div>
                            <div>{fechas.join(" | ")}</div>
                        </div>
                    </div>

                </div>
            </div>
        );

    }
}

export default Estudiante;
