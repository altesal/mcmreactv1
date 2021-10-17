import react from "react";
import './StampItem.css';

function StampItem (props) {

    const onCollection = () => {
        alert('Sello conseguido para MCM: ' + props.text);
    };

    const onDelete = () => {
        alert('Sello eliminado de MCM: ' + props.text);
    };

    return(
        <li className="StampItem">
            <span 
                className={ `Icon Icon-check ${props.collection && 'Icon-check--active'}`} 
                onClick={props.onCollection}
            >
            ✓
            </span>
            <p className={ `StampItem-p ${props.collection && 'StampItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="Icon icon-delete"
                onClick={ props.onDelete }
            >
                X
            </span>
        </li>
    );
}

export { StampItem }