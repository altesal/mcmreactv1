import React from "react";
import "./StampCounter.css";

const estilos = {
    color: 'red',
    backgroundColor: 'yellow',
    
};



function StampCounter({total, collection}) {
    
    return (
        <h2 className="StampCounter">En MCM puedes ver {collection} de estos {total} Sellos</h2>
    );
}

//export default StampCounter;  -> estaría ok pero pueden generarse erroores
export { StampCounter };  //--> obligar a usar los nommrbes que yo quiero
