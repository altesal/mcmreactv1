import React from "react";
import { StampContext } from "../StampContext";
import './StampForm.css'

function StampForm() {
    const [newStampValue,setNewStampValue] = React.useState();

    const {
        addStamp,
        setOpenModal
    } = React.useContext(StampContext);


    const onChange = (event) => {
        setNewStampValue(event.target.value);
    };    

    const onCancel = () => {
       setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault(); //cuando el formulario se envia, no se recarga la pagina sino que se cancela
       addStamp(newStampValue);
       setOpenModal(false);
    };

    return (
            <form onSubmit={onSubmit}>
                    <label>Añade sellos mundiales...</label>
                    <textarea
                    value={newStampValue}
                    onChange={onChange}
                    placeholder="Descripción del nuevo sello..."
                     />
                     <div className="StampForm-buttonContainer">
                         <button
                            type="button"
                            className="StampForm-button StampForm-button--cancel"
                            onClick={onCancel}
                         >
                            Cancelar
                         </button>
                         <button
                          type="submit"
                          className="StampForm-button StampForm-button--add"
                         >
                            Añadir
                         </button>
                     </div>
            </form>
    );
}

export { StampForm};