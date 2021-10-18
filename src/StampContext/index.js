import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const StampContext = React.createContext();
//Como stampcontext es un objeto, podemos sacar sus propiedades  -> que son 2 componentes

//const { Provider, Consumer } = React.createContext();

//creamos un puente, una ayuda, un atajo para comunicarlos

function StampProvider(props) {

    const {
        item: stamps, 
        saveItem: saveStamps,
        loading,
        error,
      } = useLocalStorage('STAMPS_V1', []);
      
        const [searchValue, setSearchValue] = React.useState('');
        const [openModal, setOpenModal] = React.useState(false);
        const collectionStamps = stamps.filter(sello => !!sello.collection).length;
        const totalStamps = stamps.length;
      
        let searchedStamps = [];
      
        if (!searchValue.length  >= 1) {
          searchedStamps = stamps;
        } 
        else 
        {
          searchedStamps = stamps.filter(sello => {
            const stampText = sello.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return stampText.includes(searchText);
          })
        }
      
        const addStamp  = (text) => {
            const newStamps = [...stamps];
            newStamps.push({
                collection:false,
                text,

            });
              saveStamps(newStamps);  //--> Ejecuta un RE-RENDER
          }
      
      const marcarStamps  = (text) => {
        const stampIndex = stamps.findIndex(stamp => stamp.text === text);
        
        const newStamps = [...stamps];
        newStamps[stampIndex].collection=true; 
          //stamps[stampIndex] = {
          //  text: stamps[stampIndex].text,
          //  collection: true,
          //};
          saveStamps(newStamps);  //--> Ejecuta un RE-RENDER
      }
      
      const deleteStamps = (text) => {
        const stampIndex = stamps.findIndex(stamp => stamp.text === text);
        const newStamps = [...stamps];
        newStamps.splice(stampIndex,1);
        saveStamps(newStamps);
      }
      


    return (
        //Todas las propiedades que queramos compartir deberán estar en value
        //value será un objeto 
        <StampContext.Provider value={{
            loading,
            error,
            totalStamps,
            collectionStamps,
            searchValue,
            setSearchValue,
            searchedStamps,
            marcarStamps,
            deleteStamps,
            addStamp,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </StampContext.Provider>
    );
}

export {StampContext, StampProvider }



