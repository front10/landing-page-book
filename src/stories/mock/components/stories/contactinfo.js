export default {
  name: 'Contact Info',
  summary:
    'It is always important to have the most information of your contacts, our component provides it.',
  import: ``,
  withStyles: true,
  extractProps: ['icon'],
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<ContactInfo
    showBorder
    showIcons
    lat={26.5}
    lng={-80.2}
    locationApiKey="AIzaSyCnbxTadExb8UYwzkBkQ_ITf5gFL_3jaAc"
    address="9728 Birchwood St. Navarre, FL 32566"
    email="contact@front10.com"
    phone="+001 3521 4587"
    mobile="+001 3521 4587"
    fax="208-658744"
    website="www.front10.com"
    contentAlign="left"
/>`,
      tabsActive: ['code']
    }
  ]
};
