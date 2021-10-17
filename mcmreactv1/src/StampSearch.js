import React from "react";
import './StampSearch.css';

function StampSearch({searchValue, setSearchValue}){

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