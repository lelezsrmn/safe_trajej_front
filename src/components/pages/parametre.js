import { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function Parametre() {
    const [parametresUtilisateur, setParametresUtilisateur] = useState({
        distanceUnite: "km",
        voixNavigation: "femme",
        modeCarte: "standard",
    });

    const handleChange = (param, valeur) => {
        setParametresUtilisateur({
            ...parametresUtilisateur,
            [param]: valeur,
        });
    };

    return (
        <div>
            <h1>Paramètres</h1>
            <div>
                <label htmlFor="distanceUnite">Unité de distance:</label>
                <select
                    id="distanceUnite"
                    value={parametresUtilisateur.distanceUnite}
                    onChange={(event) => handleChange("distanceUnite", event.target.value)}
                >
                    <option value="km">Kilomètres</option>
                    <option value="miles">Miles</option>
                </select>
            </div>
            <div>
                <label htmlFor="voixNavigation">Voix de navigation:</label>
                <select
                    id="voixNavigation"
                    value={parametresUtilisateur.voixNavigation}
                    onChange={(event) => handleChange("voixNavigation", event.target.value)}
                >
                    <option value="femme">Femme</option>
                    <option value="homme">Homme</option>
                </select>
            </div>
            <div>
                <label htmlFor="modeCarte">Mode de carte:</label>
                <select
                    id="modeCarte"
                    value={parametresUtilisateur.modeCarte}
                    onChange={(event) => handleChange("modeCarte", event.target.value)}
                >
                    <option value="standard">Standard</option>
                    <option value="satellite">Satellite</option>
                </select>
            </div>
            <Link to="/confidentialite">
                <button>Confidentialité</button>
            </Link>
        </div>
    );
}

export default Parametre;
