import React from "react";
import "../Hojas-style/style.css";



function Testimonio(props){
    return(
    <div className="container-fluid">
    <div className="contenedot-testimonio">
     <img className="imagen-testimonio" src={require(`../imagenes/${props.imagen}.png`)} alt="Foto-Emma"/>
     <div className="contenedor-texto">
    <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
    <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
    <p className="texto-testimonio">"{props.Testimonio}"</p>
</div>
</div>
</div>
    );
}
export default Testimonio;