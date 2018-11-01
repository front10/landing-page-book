const markers = [
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

export default {
  name: 'Location',
  summary: 'A simple way to point out a place will be easier for users to locate.',
  import: ``,
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<Location
    apiKey="AIzaSyCnbxTadExb8UYwzkBkQ_ITf5gFL_3jaAc"
    lat={26.5}
    lng={-80.2}
    zoom={10}
    markers={${JSON.stringify(markers, null, 8)}}
/>`,
      tabsActive: ['code']
    }
  ]
};
