import React from 'react';
import './App.css';
import Estudiante from './Estudiante';
import Paginador from './Paginador';

class Reporte extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            paginaActual: 0,
            anteriorActivado: false,
            siguienteActivado: this.props.estudiantes.length > this.props.numPorPagina
        };

        this.handleAnteriorClick = this.handleAnteriorClick.bind(this);
        this.handleSiguienteClick = this.handleSiguienteClick.bind(this);
    }

    async handleAnteriorClick() {
        let actual = this.state.paginaActual;

        this.setState({
            siguienteActivado: true
        });

        await this.setState({
            paginaActual: actual - 1
        });

        if (this.state.paginaActual === 0) {
            this.setState({
                anteriorActivado: false
            });
        }

    }

    async handleSiguienteClick() {
        let actual = this.state.paginaActual;

        this.setState({
            anteriorActivado: true
        });

        await this.setState({
            paginaActual: actual + 1
        });

        if (this.state.paginaActual + 1 >= this.props.estudiantes.length / this.props.numPorPagina) {
            this.setState({
                siguienteActivado: false
            });
        }

    }

    render() {

        const arrEstudiantes = [];

        let actual = this.props.numPorPagina * this.state.paginaActual;

        for (let i = actual; i < this.props.estudiantes.length && i < actual + this.props.numPorPagina; i++) {
            let estudiante = this.props.estudiantes[i];
            arrEstudiantes.push(
                <Estudiante
                    key={estudiante.id}
                    estudiante={estudiante}
                    fechaInicio={this.props.fechaInicio}
                    fechaFin={this.props.fechaFin}
                    institucion={this.props.institucion}
                />
            );
            
        }

        return (
            <div >
                <h2>Reporte</h2>
                {arrEstudiantes}
                <Paginador
                    onAnteriorClick={this.handleAnteriorClick}
                    onSiguienteClick={this.handleSiguienteClick}
                    anteriorActivado={this.state.anteriorActivado}
                    siguienteActivado={this.state.siguienteActivado}
                />
            </div>
        );
    }
}

export default Reporte;
