import React from "react";
import Login from "../pages/login";
import "../css/csscomponents/cssmenu.css";

const Menu = () => {
    return (
        <div className="menu">
            <h1 className="titre">SafeTraJeJ</h1>
            <div className={'menubutton'}>
                <button className={'btnmenu'}>LOGIN</button>
                <button className={'btnmenu'}>PARAMETRE</button>
            </div>


            <div className={'by'}>
                <p>Lucas - Hector - Léonnard</p>
            </div>
        </div>
    );
};

export default Menu;
