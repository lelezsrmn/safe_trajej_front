import React from "react";
import Carte from "./components/DossMap/Carte"

import styles from "./css/App.css";
import Menu from "./components/menu";

export default function App() {
    return (
        <div className="App">
            <Carte />
            <Menu />
        </div>
    );
}
