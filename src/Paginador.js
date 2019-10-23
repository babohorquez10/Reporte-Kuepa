import React from 'react';
import './Paginador.css';

class Paginador extends React.Component {

    constructor(props) {
        super(props);

        this.handleAnterior = this.handleAnterior.bind(this);
        this.handleSiguiente = this.handleSiguiente.bind(this);
    }

    handleAnterior(e) {
        this.props.onAnteriorClick();
    }

    handleSiguiente(e) {
        this.props.onSiguienteClick();
    }

    render() {
        return (
            <div>
                <div className="divBtnPaginador">
                    <button disabled={!this.props.anteriorActivado} id="btnAnterior" type="button" className="btn" onClick={this.handleAnterior}>Anterior</button>
                    <button disabled={!this.props.siguienteActivado} id="btnSiguiente" type="button" className="btn" onClick={this.handleSiguiente}>Siguiente</button>
                </div>
            </div>
        );
    }
}

export default Paginador;
