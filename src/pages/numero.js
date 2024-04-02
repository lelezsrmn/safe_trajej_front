import React from 'react'
function Numero () {
    const callPolice = () => {
        window.open('tel:17');
    };

    const callPompier = () => {
        window.open('tel:18');
    };

    return (
        <div>
            <h2>Numéros d'urgence</h2>
            <p onClick={callPolice}><button>Police</button></p>
            <p onClick={callPompier}><button>Pompier</button></p>
        </div>
    );
}
export default Numero
