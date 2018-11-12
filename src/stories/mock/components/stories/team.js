import members from '../team';

export default {
  name: 'Team',
  summary:
    'Teamwork helps solve problems. Collaboration within a group can help solve difficult problems. do not forget to recognize the members of your team.',
  withStyles: true,
  import: ``,
  extractProps: ['member', 'memberSubTitle', 'memberSummary', 'social'],
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<Team members={${JSON.stringify(members, null, 8)}} />`,
      tabsActive: ['code']
    },
    {
      name: 'Top background',
      summary: '',
      code: `<Team topColor="#E47070" members={${JSON.stringify(members, null, 8)}}/>`,
      tabsActive: []
    },
    {
      name: 'With shadow',
      summary: '',
      code: `<Team shadow topColor="#E47070" members={${JSON.stringify(members, null, 8)}}/>`,
      tabsActive: []
    },
    {
      name: 'With image shadow',
      summary: '',
      code: `<Team imageShadow topColor="#E47070" members={${JSON.stringify(members, null, 8)}}/>`,
      tabsActive: []
    }
  ]
};
