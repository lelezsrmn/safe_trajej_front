import Carte from "./components/DossMap/Carte"
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from "./components/menu";
import routes from "./components/routes";

export default function App() {
    return (
        <div className="App">
            <Router>
                <Carte />
                <Menu /> {/* Assurez-vous que votre composant Menu est correctement implémenté */}
                <Routes>
                    {routes.map((route) => (
                        <Route key={route.path} path={route.path} element={<route.component />} />
                    ))}
                </Routes>
            </Router>
        </div>
    );
}
