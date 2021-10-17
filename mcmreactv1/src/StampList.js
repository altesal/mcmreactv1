import react from "react";
import './StampList.css';

function StampList (props) {
    return(
        <sectio>
            <ul>
                {props.children}
            </ul>
        </sectio>
    );
}

export {StampList}