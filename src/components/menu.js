import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <Link to="login">
                <button>Login</button>
            </Link>
            <Link to="/numero">
                <button>Numéro</button>
            </Link>
            <Link to="/">
                <button>Paramètre</button>
            </Link>
        </>

    );
};

export default Menu;

