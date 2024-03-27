import React, { useState } from 'react';
const Client = require("../../../../safe_trajej_back/bdd/Client");
const Bdd_client = require("../../../../safe_trajej_back/bdd/Bdd_client");

function Login() {

    async function ClientSelection(username, email, first_name, last_name, password, adresses, num) {
        const bdd_client = new Bdd_client();

        await bdd_client.connect();

        await bdd_client.create_client(username, email, first_name, last_name, password, adresses, num);
        return true;
    }

    const [username] = useState('');
    const [email] = useState('');
    const [first_name] = useState('');
    const [last_name] = useState('');
    const [hashed_password] = useState('');
    const [adresses] = useState('');
    const [num] = useState('');


    return (
        <div>
            <input type="text" value={username} onChange={create_client.username} placeholder="Pseudo"/>
            <input type="email" value={email} onChange={create_client.email} placeholder="Email"/>
            <input type="text" value={first_name} onChange={create_client.first_name} placeholder="Prénom"/>
            <input type="text" value={last_name} onChange={create_client.last_name} placeholder="Nom"/>
            <input type="password" value={hashed_password} onChange={create_client.password} placeholder="Mot de passe"/>
            <input type="text" value={adresses} onChange={create_client.adresses} placeholder="Adresses"/>
            <input type="number" value={num} onChange={create_client.num} placeholder="Numéro"/>
            <button type="submit" onClick={create_client()}>Valider</button>
        </div>
    );
}

export default Login;
