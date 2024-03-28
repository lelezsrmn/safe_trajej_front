import React from 'react';
import { Marker } from '@react-google-maps/api';

export function Marqueurs({ marqueurs }) {
    return (
        <>
            {marqueurs.map((marqueur, index) => (
                <Marker key={index} position={marqueur}/>
            ))}
        </>
    );
}
