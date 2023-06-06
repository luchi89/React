import React from "react";
import PropTypes from "prop-types";

class ComponenteB extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        conectado: this.props.contacto.conectado,
    };
    this.handleClick = this.handleClick.bind(this);
}

    handleClick() {
    this.setState((prevState) => ({
    conectado: !prevState.conectado,
    }));
}

    render() {
    const { contacto } = this.props;
    const { conectado } = this.state;
    const estado = conectado ? "Contacto En Línea" : "Contacto No Disponible";

    return (
    <div>
        <p>Estado: {estado}</p>
        <button onClick={this.handleClick}>Cambiar Estado</button>
    </div>
    );
}
}

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto).isRequired,
};

export default ComponenteB;
