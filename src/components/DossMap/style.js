export const styleDeConteneur = {
    width: '75vw',
    height: '98vh',
    borderRadius: '20px',
};

export const styleDeCarteSombre = [
    {
        elementType: 'geometry',
        stylers: [{ color: '#1e1e1e' }]
    },
    {
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#1e1e1e' }]
    },
    {
        elementType: 'labels.text.fill',
        stylers: [{ color: '#e0e0e0' }]
    },
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f5f5f5' }]
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f5f5f5' }]
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263238' }]
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#90a4ae' }]
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#424242' }]
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212121' }]
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#ffffff' }]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#616161' }]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212121' }]
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#ffffff' }]
    },
    {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#424242' }]
    },
    {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f5f5f5' }]
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#1e5cad' }]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#b0bec5' }]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#0d47a1' }]
    }
];
