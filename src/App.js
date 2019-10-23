import React from 'react';
import './App.css';
import Filtros from './Filtros';
import Reporte from './Reporte';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fechaInicio: "",
      fechaFin: "",
      institucion: "Todas"
    };

    this.handleInstitucionChange = this.handleInstitucionChange.bind(this);
    this.handleFechaInicioChange = this.handleFechaInicioChange.bind(this);
    this.handleFechaFinChange = this.handleFechaFinChange.bind(this);
  }

  handleFechaInicioChange(fechaInicio) {
    this.setState({
      fechaInicio: fechaInicio
    });
  }

  handleFechaFinChange(fechaFin) {
    this.setState({
      fechaFin: fechaFin
    });
  }

  handleInstitucionChange(institucion) {
    this.setState({
      institucion: institucion
    });
  }

  render() {
    return (
      <div className="container App">
        <h1>Nombre del Reporte</h1>
        <Filtros
          fechaInicio={this.state.fechaInicio}
          fechaFin={this.state.fechaFin}
          institucion={this.state.institucion}
          onInstitucionChange={this.handleInstitucionChange}
          onFechaInicioChange={this.handleFechaInicioChange}
          onFechaFinChange={this.handleFechaFinChange}
        />

        <Reporte
          fechaInicio={this.state.fechaInicio}
          fechaFin={this.state.fechaFin}
          institucion={this.state.institucion}
          estudiantes={this.props.estudiantes}
          numPorPagina={3}
        />

      </div>
    );
  }


}

export default App;
