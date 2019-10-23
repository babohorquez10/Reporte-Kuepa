import React from 'react';
import './App.css';

class Filtros extends React.Component {

    constructor(props) {
        super(props);

        this.handleFechaInicioChange = this.handleFechaInicioChange.bind(this);
        this.handleFechaFinChange = this.handleFechaFinChange.bind(this);
        this.handleInstitucionChange = this.handleInstitucionChange.bind(this);
    }

    handleInstitucionChange(e) {
        this.props.onInstitucionChange(e.target.value);
    }

    handleFechaFinChange(e) {
        this.props.onFechaFinChange(e.target.value);
    }

    handleFechaInicioChange(e) {
        this.props.onFechaInicioChange(e.target.value);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <label htmlFor="startDate">Fecha Inicio:</label>
                        <input type="date" id="startDate" className="datePicker form-control" value={this.props.fechaInicio} onChange={this.handleFechaInicioChange}/>

                    </div>
                    <div className="col-md-6 col-12">
                        <label htmlFor="endDate">Fecha Fin:</label>
                        <input type="date" id="endDate" className="datePicker form-control" value={this.props.fechaFin} onChange={this.handleFechaFinChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <label htmlFor="exampleFormControlSelect1">Institución Educativa</label>
                    <select className="form-control" value={this.props.institucion} id="exampleFormControlSelect1" onChange={this.handleInstitucionChange}>
                        <option>Todas</option>
                        <option>Institución 1</option>
                        <option>Institución 2</option>
                        <option>Institución 3</option>
                    </select>
                    </div>
                </div>
            </div>
        );
    }


}

export default Filtros;
