import React, { useEffect, useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { FormulaireCoordonnees } from './FormulaireCoordonnees';
import { Marqueurs } from './Marqueurs';
import { GeolocalisationButton } from './GeolocalisationButton';
import { styleDeConteneur, styleDeCarteSombre } from './style';
import { style } from '../../css/csscomponents/cssmap.css'

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function Carte() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBT-Ae5JMnlCLbX5zi8BViKF40zjCKrx1g"
    });

    const [position, setPosition] = useState(null);
    const [marqueurs, setMarqueurs] = useState([]);
    const [afficherCoordonnees, setAfficherCoordonnees] = useState(false);


    const obtenirLocalisation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setPosition({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                (erreur) => {
                    console.log(erreur.message);
                },
                options
            );
        } else {
            console.log("La géolocalisation n'est pas prise en charge par votre navigateur");
        }
    };

    useEffect(() => {
        obtenirLocalisation();
    }, []);
    
    useEffect(() => {
        if (position) {
            const url = `http://localhost:3030/danger?position=${position.lat},${position.lng}&distance=10000`
            fetch(url).then(response => response.json()).then(data => {
                const dangers = data.map(danger => {
                    return {lat: danger.position[0], lng: danger.position[1]}
                })
                setMarqueurs(dangers)
            })
        }
    }, [position]);

    return isLoaded ? (
        <div>
            <GoogleMap
                mapContainerStyle={styleDeConteneur}
                center={position}
                zoom={15}
                options={{styles: styleDeCarteSombre}}
            >
                <Marqueurs markers={marqueurs} />
            </GoogleMap>
            <div className={'ContainerSignalisation'}>
                <div>
                    <button className={'BoutonSignalisation'} onClick={() => setAfficherCoordonnees(!afficherCoordonnees)}>
                        {afficherCoordonnees ? 'Cacher' : 'Signaler'}
                    </button>
                    {afficherCoordonnees && <FormulaireCoordonnees position={position}/>}
                </div>
            </div>
            <GeolocalisationButton />
        </div>
    ) : <></>;
}

export default Carte;
