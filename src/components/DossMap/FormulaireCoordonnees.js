import React, { useState } from 'react';
const Bdd_danger = 'safe_trajej_back/bdd/Bdd_danger.js';

export function FormulaireCoordonnees({position}) {
    const [motSelectionne, setMotSelectionne] = useState('');

    const handleChangeSelect = (evenement) => {
        setMotSelectionne(evenement.target.value);
    };

    const DangerSelection = async (danger, loc) => {
        const bdd_danger = new Bdd_danger();

        await bdd_danger.connect();

        await bdd_danger.create_danger(danger, loc);
        return true;
    };

    return (
        <div className={'ContainerFormulaireSignalisation'}>
            <div >
                <p>Latitude:</p>
                <input type="text" value={position?.lat.toFixed(6)} readOnly/>
                <p>Longitude:</p>
                <input type="text" value={position?.lng.toFixed(6)} readOnly/>
            </div>

            <div className={'bloc'}>
                <select value={motSelectionne} onChange={handleChangeSelect}>
                    <option value="">Sélectionner un Danger</option>
                    <option value="Homicide">Homicide</option>
                    <option value="Rape">Viol</option>
                    <option value="Robbery">Vol</option>
                    <option value="Agression">Agression</option>
                    <option value="PersonneSuspect">Personne Suspecte</option>
                </select>
                <p>Le Danger sélectionné est : {motSelectionne}</p>
            </div>

            <button className={'BoutonEnvoie'} onClick={() => DangerSelection(motSelectionne, position)}>SEND</button>
        </div>
    );
}
