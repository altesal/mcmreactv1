import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue); //Tenemos un estado guardado (el de item) y un método para actualizarlo. Gracias a useState

    React.useEffect( () => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
        
          if (!localStorageItem ) {
              localStorage.setItem(itemName, JSON.stringify(initialValue));
              parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
          setLoading(false);
  
        } catch(error) {
          setError(error)
        }
      }, 2500);
    });

 
  const saveItem = (newItem) => {
   try{
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
   }
   catch(error) {
    setError(error)
   }
  };

  return {
    item,
    saveItem,
    loading,
  };
}

export { useLocalStorage }