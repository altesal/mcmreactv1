import React from "react";
import { StampContext } from "../StampContext";
import "./StampCounter.css";

const estilos = {
    color: 'red',
    backgroundColor: 'yellow',
    
};



function StampCounter() {
    const {totalStamps, collectionStamps} = React.useContext(StampContext);

    return (
        <h2 className="StampCounter">En MCM puedes ver {collectionStamps} de estos {totalStamps} Sellos</h2>
    );
}

//export default StampCounter;  -> estaría ok pero pueden generarse erroores
export { StampCounter };  //--> obligar a usar los nommrbes que yo quiero
