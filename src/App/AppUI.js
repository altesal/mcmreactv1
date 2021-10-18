import React from 'react';
import { StampContext } from '../StampContext';
import { StampCounter } from '../StampCounter';
import { StampSearch } from '../StampSearch';
import { StampList } from '../StampList';
import {StampForm } from '../StampForm';
import { CreateStampButton } from '../CreateStampButton';
import { StampItem } from '../StampItem';
import { Modal } from '../Modal';

function AppUI() {

    const {
            error, 
            loading,
            searchedStamps,
            marcarStamps,
            deleteStamps,
            openModal,
            setOpenModal,
        } = React.useContext(StampContext);


    return (
<React.Fragment>
    <StampCounter />
    <StampSearch />
            <StampList>
            {error && <p>Hubo un error...</p>}
            {loading && <p>Estamos cargando...</p>}
            {!loading && !searchedStamps.length  && <p>Añade el primer sello</p>}
    
            {searchedStamps.map(stamp => (
                  <StampItem 
                    key={stamp.text} 
                    text={stamp.text} 
                    collection={stamp.collection}
                    onCollection={ () => marcarStamps(stamp.text) }
                    onDelete={() => deleteStamps(stamp.text)}
                />
              ))}
            </StampList>        


       {!!openModal && (
            <Modal>
                <StampForm />
            </Modal>
       )}

    <CreateStampButton
        setOpenModal={setOpenModal}
     />
</React.Fragment>

    );

}

export { AppUI };