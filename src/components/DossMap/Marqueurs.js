import React from 'react';
import { Marker } from '@react-google-maps/api';

export function Marqueurs({ markers }) {
    return (
        <>
            {markers.map((marker, index) => (
                <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
            ))}
        </>
    );
}
