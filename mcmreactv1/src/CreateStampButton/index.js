import react from "react";
import "./CreateStampButton.css";

function CreateStampButton(props){

    const onClickButton = () => {
       props.setOpenModal(prevState => !prevState);

       
    };

    return(
        <button 
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +

            
        </button>
    );
}

export { CreateStampButton }