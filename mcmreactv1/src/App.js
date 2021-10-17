import React from 'react';
import { StampCounter } from './StampCounter';
import { StampSearch } from './StampSearch';
import { StampList } from './StampList';
import { CreateStampButton } from './CreateStampButton';
import { StampItem } from './StampItem';
import react from 'react';
//import './App.css';

const defaultStamps = [
  { text: 'La Pedrera de Gaudi', collection: true},
  { text: 'Parque Guell de Gaudi', collection: true},
  { text: 'Catedral Barcelona', collection: false},
  { text: 'Jarrón de las gacelas', collection: false}
];


function App() {

  const [stamps, setStamps] = React.useState(defaultStamps);
  const [searchValue, setSearchValue] = React.useState('');

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


const anadirStamps  = (text) => {
  const stampIndex = stamps.findIndex(stamp => stamp.text === text);
  
  const newStamps = [...stamps];
  newStamps[stampIndex].collection=true;
  setStamps(newStamps);  //--> Ejecuta un RE-RENDER
  //stamps[stampIndex] = {
  //  text: stamps[stampIndex].text,
  //  collection: true,
  //};
}

const deleteStamps = (text) => {
  const stampIndex = stamps.findIndex(stamp => stamp.text === text);
  const newStamps = [...stamps];
  newStamps.splice(stampIndex,1);
  setStamps(newStamps);
}

  
  return (
<React.Fragment>
    <StampCounter 
      total={totalStamps}
      collection = {collectionStamps }
    />
    <StampSearch 
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
     />
    <StampList>
        {searchedStamps.map(stamp => (
              <StampItem 
                key={stamp.text} 
                text={stamp.text} 
                collection={stamp.collection}
                onCollection={ () => anadirStamps(stamp.text) }
                onDelete={() => deleteStamps(stamp.text)}
            />
          ))}
    </StampList>

    <CreateStampButton />
    
</React.Fragment>
  );
}

export default App;
