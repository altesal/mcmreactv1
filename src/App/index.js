import React from 'react';
import { StampContext, StampProvider } from '../StampContext';
import { AppUI } from './AppUI';

/*
[{ text: 'La Pedrera de Gaudi', collection: true},
  { text: 'Parque Guell de Gaudi', collection: true},
  { text: 'Buzón de correos Casa del Arcediano, de Lluis Domênech i Muntaner', collection: false},
  { text: 'Catedral Barcelona', collection: false},
  { text: 'Jarrón de las gacelas', collection: false}]
*/



function App() {
  return (
    <StampProvider>
      <AppUI />
    </StampProvider>
  );
}

export default App;
