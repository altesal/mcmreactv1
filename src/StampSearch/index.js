import React from "react";
import './StampSearch.css';
import { StampContext } from "../StampContext";

function StampSearch(){

    const {searchValue, setSearchValue} = React.useContext(StampContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return[
        <input 
            className="StampSearch" 
            placeholder="Barcelona"
            value={searchValue}
            onChange={onSearchValueChange}
        />,
        <p>{searchValue}</p>
    ];
}

export { StampSearch }