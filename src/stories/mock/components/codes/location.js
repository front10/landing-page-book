const def = `const markerslist = [
  {
    icon: 'fa fa-map-marker',
    color: '#d20000',
    lat: 26.5,
    lng: -80.2
  },
  {
    icon: 'fa fa-map-marker',
    color: '#d2a430',
    lat: 26.6,
    lng: -80.3
  }
];
  
<Location
  apiKey={'Your google map API_KEY'}
  lat={26.5}
  lng={-80.2}
  markers={markerslist}
  zoom={10}
/>`;

export default def;
