
import ComponenteB from './components/componenteA';
import React from "react";


// class App extends React.ComponenteA {
//   constructor ()
// }

//extends es la palabra que hereda del componente de react//
class ComponenteB extends React.ComponenteA{
  constructor(nombre, apellido, email, conectado) {
    
    this.nombre = nombre,
    this.apellido = apellido,
    this.email = email,
    this.conectado = conectado,
  }
}
