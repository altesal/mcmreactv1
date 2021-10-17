import react from "react";
import "./CreateStampButton.css";

function CreateStampButton(){

    const onClickButton = (msg) => {
        alert(msg);
    };

    return(
        <button 
            className="CreateTodoButton"
            onClick={() => onClickButton('Aquí se debería abrir el modal')}
        >
            +

            
        </button>
    );
}

export { CreateStampButton }