import React from "react";
import PropTypes from "prop-types";
import ComponenteB from "./ComponenteB";

class ComponenteA extends React.Component {
    render() {
    const { contacto } = this.props;

    return (
    <div>
        <h2>Contacto:</h2>
        <p>Nombre: {contacto.nombre}</p>
        <p>Apellido: {contacto.apellido}</p>
        <p>Email: {contacto.email}</p>
        <ComponenteB contacto={contacto} />
    </div>
    );
}
}

ComponenteA.propTypes = {
    contacto: PropTypes.instanceOf(Contacto).isRequired,
};

export default ComponenteA;
