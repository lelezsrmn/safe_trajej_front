import React, { useState } from 'react';
const Bdd_client = 'safe_trajej_back/bdd/Bdd_client'

function Login() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [adresses, setAdresses] = useState('');
    const [num, setNum] = useState('');

    async function ClientSelection(username, email, first_name, last_name, password, adresses, num) {
        const bdd_client = new Bdd_client();

        try {
            await bdd_client.connect();

            // Création du client dans la base de données
            const statusCode = await bdd_client.create_client(username, email, first_name, last_name, password, adresses, num);

            // Réinitialiser les états après soumission du formulaire
            if (statusCode === 201) {
                setUsername('');
                setEmail('');
                setFirstName('');
                setLastName('');
                setPassword('');
                setAdresses('');
                setNum('');
            }
        } catch (error) {
            console.error('Une erreur est survenue:', error);
        } finally {
            await bdd_client.close();
        }
    }

    return (
        <div>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Pseudo"/>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
            <input type="text" value={first_name} onChange={e => setFirstName(e.target.value)} placeholder="Prénom"/>
            <input type="text" value={last_name} onChange={e => setLastName(e.target.value)} placeholder="Nom"/>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Mot de passe"/>
            <input type="text" value={adresses} onChange={e => setAdresses(e.target.value)} placeholder="Adresses"/>
            <input type="number" value={num} onChange={e => setNum(e.target.value)} placeholder="Numéro"/>
            <button type="submit" onClick={() => ClientSelection(username, email, first_name, last_name, password, adresses, num)}>Valider</button>
        </div>
    );
}

export default Login;
