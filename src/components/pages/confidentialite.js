import React,  {useState} from "react";

function Confidentialite() {
    const [adresse, setAdresse] = useState('');
    const [newpassword, setNewpasseword] = useState('');
    const [adressemail, setAdressemail] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');

    const handleAdresse = (event) => {
        setAdresse(event.target.value);
    };

    const handleNewpassword = (event) => {
        setNewpasseword(event.target.value);
    };

    const handleAdressemail = (event) => {
        setAdressemail(event.target.value);
    };

    const handleNom = (event) => {
        setNom(event.target.value);
    };

    const handlePrenom = (event) => {
        setPrenom(event.target.value);
    };

    return (
        <div>
            <input type="text" value={adresse} onChange={handleAdresse} placeholder="Modifier Adresse"/>
            <input type="text" value={newpassword} onChange={handleNewpassword} placeholder="Modifier Mot de Passe"/>
            <input type="email" value={adressemail} onChange={handleAdressemail} placeholder="Modifier Email"/>
            <input type="password" value={nom} onChange={handleNom} placeholder="Modifier Nom"/>
            <input type="password" value={prenom} onChange={handlePrenom} placeholder="Modifier Prenom"/>
            <button type="submit">Sauvegarder les paramètres</button>
        </div>
    )
}

export default Confidentialite;

