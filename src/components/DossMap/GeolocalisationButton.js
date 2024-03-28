import React from 'react';

export function GeolocalisationButton() {
    const refreshLocation = () => {
        obtenirLocalisation(); // Met à jour la position actuelle
    };

    return (
        <div className={'ContainerGéocalisation'}>
            <button className={'BoutonGéolocalisation'} onClick={refreshLocation}>X</button>
        </div>
    );
}
