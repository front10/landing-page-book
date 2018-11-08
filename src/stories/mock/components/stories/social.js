export default {
  name: 'Social',
  summary:
    'Websites and applications that enable users to create and share content or to participate in social networking. Allow your users to share the content of your website in their social networks.',
  import: ``,
  withStyles: true,
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<Social gray type="facebook" rounded url="https://front10.com" directLink={false} />`,
      tabsActive: ['code']
    },
    {
      name: 'All',
      summary: '',
      code: `<React.Fragment>
    <Social gray={false} type="email" rounded url="https://front10.com" />
    <Social gray={false} type="facebook" rounded url="https://front10.com" />
    <Social gray={false} type="google" rounded url="https://front10.com" />
    <Social gray={false} type="linkedin" rounded url="https://front10.com" />
    <Social gray={false} type="livejournal" rounded url="https://front10.com" />
    <Social gray={false} type="ok" rounded url="https://front10.com" />
    <Social gray={false} type="pinterest" rounded url="https://front10.com" />
    <Social gray={false} type="reddit" rounded url="https://front10.com" />
    <Social gray={false} type="telegram" rounded url="https://front10.com" />
    <Social gray={false} type="tumblr" rounded url="https://front10.com" />
    <Social gray={false} type="twitter" rounded url="https://front10.com" />
    <Social gray={false} type="viber" rounded url="https://front10.com" />
    <Social gray={false} type="vk" rounded url="https://front10.com" />
    <Social gray={false} type="whatsapp" rounded url="https://front10.com" />
</React.Fragment>`,
      tabsActive: []
    }
  ]
};
