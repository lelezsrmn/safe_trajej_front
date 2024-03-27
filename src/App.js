import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Styles from "./css/App.css";
import Resultatsearch from "./components/resultatsearch";
import Menu from "./components/menu";
import Map from "./components/map";
import routes from "./components/routes";

export default function App() {
    return (
        <div className="App">
            <Map />
            <Resultatsearch />
            <Router>
                <Routes>
                    {routes.map((route) => (
                        <Route key={route.path} path={route.path} element={<route.component />} />
                    ))}
                </Routes>
            </Router>
        </div>
    );
}
