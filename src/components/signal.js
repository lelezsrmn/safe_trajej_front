// Signalisationcomp.js
import React, { useState } from "react";
import "../css/csscomponents/csssignalisation.css";

const Signalisationcomp = () => {
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [motSelectionne, setMotSelectionne] = useState("");

    const handleLatitudeChange = (event) => {
        setLatitude(event.target.value);
    };

    const handleLongitudeChange = (event) => {
        setLongitude(event.target.value);
    };

    const handleDangerChange = (event) => {
        setMotSelectionne(event.target.value);
    };

    return (
        <div className={'ContainerInfoSignalisation'}>
            <div className={'bloc'}>
                <p>Latitude:</p>
                <input type="text" value={latitude} onChange={handleLatitudeChange} />
                <p>Longitude:</p>
                <input type="text" value={longitude} onChange={handleLongitudeChange} />
            </div>

            <div className={'bloc'}>
                <select value={motSelectionne} onChange={handleDangerChange}>
                    <option value="">Sélectionner un Danger</option>
                    <option value="Disparition">Disparition</option>
                    <option value="Vol">Vol</option>
                    <option value="Agression">Agression</option>
                    <option value="Trafic illegale">Trafic illegale</option>
                </select>
                <p className={'validation'}>Danger : {motSelectionne}</p>
            </div>

            <button className={'BoutonSignalisation'}>Signalé</button>

        </div>
    );
};

export default Signalisationcomp;
