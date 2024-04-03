import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../../css/csscomponents/cssmap.css'




const mapStyles = {
    width: '72vw',
    height: '96vh',
    borderRadius: '20px',
};

const styleDeCarteSombre = [
    {
        elementType: 'geometry',
        stylers: [{ color: '#1e1e1e' }],
    },
    {
        elementType: 'labels.text.stroke',
        stylers: [{ visibility: 'off' }],
    },
    {
        elementType: 'labels.text.fill',
        stylers: [{ visibility: 'off' }],
    },
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ visibility: 'off' }],
    },
    {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ visibility: 'off' }],
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ visibility: 'off' }],
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#424242' }],
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212121' }],
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#ffffff' }],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#616161' }],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212121' }],
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#ffffff' }],
    },
    {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#424242' }],
    },
    {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f5f5f5' }],
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#1e5cad' }],
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#b0bec5' }],
    },
    {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#0d47a1' }],
    },
];

class MapContainer extends React.Component {
    render() {
        return (
            <Map
                disableDefaultUI={true}
                style={mapStyles}
                styles={styleDeCarteSombre}
                google={this.props.google}
                zoom={13}
                initialCenter={{lat: 48.11417, lng: -1.68083}}
            >
                {/*Légende*/}
                <div className="ContainerSignalisation">
                    <div className={'containerLp'}>
                        <div className="carre vol"></div>
                        <span>VOL</span>
                    </div>
                    <div className={'containerLp'}>
                        <div className="carre agression"></div>
                        <span>AGRESSION</span>
                    </div>
                    <div className={'containerLp'}>
                        <div className="carre traficill"></div>
                        <span>TRAFIC ILLEGAL</span>
                    </div>
                    <div className={'containerLp'}>
                        <div className="carre disparition"></div>
                        <span>DISPARITION</span>
                    </div>
                </div>
                {/*marqueur*/}
                <Marker
                    position={{lat: 48.114017, lng: -1.681405}}
                    title="Vol"
                    icon={{
                        path: google.maps.SymbolPath.CIRCLE,
                        fillColor: '#dcdcdc',
                        fillOpacity: 1,
                        strokeColor: '#000000',
                        strokeWeight: 0,
                        scale: 10,
                    }}
                />
                <Marker
                    position={{lat: 48.124193, lng: -1.654469}}
                    title="Vol"
                    icon={{
                        path: google.maps.SymbolPath.CIRCLE,
                        fillColor: '#DCDCDCFF',
                        fillOpacity: 1,
                        strokeColor: '#000000',
                        strokeWeight: 0,
                        scale: 10,
                    }}
                />
                <Marker
                    position={{lat: 48.109941, lng: -1.679560}}
                    title="Vol"
                    icon={{
                        path: google.maps.SymbolPath.CIRCLE,
                        fillColor: '#DCDCDCFF',
                        fillOpacity: 1,
                        strokeColor: '#000000',
                        strokeWeight: 0,
                        scale: 10,
                    }}
                />
                <Marker
                    position={{lat: 48.106901, lng: -1.680613}}
                    title="Agression"
                    icon={{
                        path: google.maps.SymbolPath.CIRCLE,
                        fillColor: '#FF0000',
                        fillOpacity: 1,
                        strokeColor: '#000000',
                        strokeWeight: 0,
                        scale: 10,
                    }}
                />
                <Marker
                    position={{lat: 48.087373, lng: -1.644337}}
                    title="Agression"
                    icon={{
                        path: google.maps.SymbolPath.CIRCLE,
                        fillColor: '#FF0000',
                        fillOpacity: 1,
                        strokeColor: '#000000',
                        strokeWeight: 0,
                        scale: 10,
                    }}
                />
                <Marker
                    position={{lat: 48.105071, lng: -1.693111}}
                    title="Agression"
                    icon={{
                        path: google.maps.SymbolPath.CIRCLE,
                        fillColor: '#FF0000',
                        fillOpacity: 1,
                        strokeColor: '#000000',
                        strokeWeight: 0,
                        scale: 10,
                    }}
                />
                <Marker
                    position={{lat: 48.096113, lng: -1.675950}}
                    title="Agression"
                    icon={{
                        path: google.maps.SymbolPath.CIRCLE,
                        fillColor: '#FF0000',
                        fillOpacity: 1,
                        strokeColor: '#000000',
                        strokeWeight: 0,
                        scale: 10,
                    }}
                />
                <Marker
                    position={{lat: 48.118691, lng: -1.712741}}
                    title="Agression"
                    icon={{
                        path: google.maps.SymbolPath.CIRCLE,
                        fillColor: '#FF0000',
                        fillOpacity: 1,
                        strokeColor: '#000000',
                        strokeWeight: 0,
                        scale: 10,
                    }}
                />
                <Marker
                    position={{lat: 48.089208, lng: -1.643354}}
                    title="trafics illégaux"
                    icon={{
                        path: google.maps.SymbolPath.CIRCLE,
                        fillColor: '#88421D',
                        fillOpacity: 1,
                        strokeColor: '#000000',
                        strokeWeight: 0,
                        scale: 10,
                    }}
                />
                <Marker
                    position={{lat: 48.122098, lng: -1.711708}}
                    title="trafics illégaux"
                    icon={{
                        path: google.maps.SymbolPath.CIRCLE,
                        fillColor: '#88421D',
                        fillOpacity: 1,
                        strokeColor: '#000000',
                        strokeWeight: 0,
                        scale: 10,
                    }}
                />
                <Marker
                    position={{lat: 48.086372, lng: -1.659078}}
                    title="trafics illégaux"
                    icon={{
                        path: google.maps.SymbolPath.CIRCLE,
                        fillColor: '#88421D',
                        fillOpacity: 1,
                        strokeColor: '#000000',
                        strokeWeight: 0,
                        scale: 10,
                    }}
                />
                <Marker
                    position={{lat: 48.134410, lng: -1.647934}}
                    title="Disparitions"
                    icon={{
                        path: google.maps.SymbolPath.CIRCLE,
                        fillColor: '#D473D4',
                        fillOpacity: 1,
                        strokeColor: '#000000',
                        strokeWeight: 0,
                        scale: 10,
                    }}
                />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCHJVe0sIRXMLDZ_GltmSXVGSU-H0DdRWg',
})(MapContainer);