import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const estudiantes = [
    {id: 0, nombre:"Andres", apellido:"González Pérez", edad: 17, telefono:"3177821212", area: "Bachillerato",
    asistencias: 
    [
        {fecha: "2019-03-04", institucion:"Institución 1"},
        {fecha: "2019-03-21", institucion:"Institución 2"},
        {fecha: "2019-04-12", institucion:"Institución 3"}
    ]},
    {id: 1, nombre:"Sonia", apellido:"Gómez Rodríguez", edad: 21, telefono:"3017631210", area: "Inglés",
    asistencias: 
    [
        {fecha: "2019-03-27", institucion:"Institución 1"},
        {fecha: "2019-04-05", institucion:"Institución 1"},
        {fecha: "2019-05-18", institucion:"Institución 2"}
    ]},
    {id: 2, nombre:"Camilo", apellido:"Páez Méndez", edad: 18, telefono:"3129403913", area: "Técnico en desarrollo de software",
    asistencias: 
    [
        {fecha: "2019-03-11", institucion:"Institución 2"},
        {fecha: "2019-05-12", institucion:"Institución 3"},
        {fecha: "2019-06-29", institucion:"Institución 3"}
    ]},
    {id: 3, nombre:"Andrea", apellido:"Pérez Santos", edad: 16, telefono:"3009471230", area: "Inglés",
    asistencias: 
    [
        {fecha: "2019-03-01", institucion:"Institución 3"},
        {fecha: "2019-04-13", institucion:"Institución 3"},
        {fecha: "2019-06-05", institucion:"Institución 2"},
        {fecha: "2019-06-20", institucion:"Institución 2"},
        {fecha: "2019-07-19", institucion:"Institución 1"}
    ]},
    {id: 4, nombre:"Leonardo", apellido:"Santana Franco", edad: 19, telefono:"3124910021", area: "Bachillerato",
    asistencias: 
    [
        {fecha: "2019-05-01", institucion:"Institución 2"},
        {fecha: "2019-05-23", institucion:"Institución 2"},
        {fecha: "2019-07-16", institucion:"Institución 1"}
    ]}
]

ReactDOM.render(<App estudiantes={estudiantes}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
