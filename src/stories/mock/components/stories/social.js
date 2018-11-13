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
      code: `<Social cssFilter="grayscale(100%)" type="facebook" rounded url="https://front10.com" directLink={false} />`,
      tabsActive: ['code']
    },
    {
      name: 'All',
      summary: '',
      code: `<>
    <Social type="email" rounded url="https://front10.com" />
    <Social type="facebook" rounded url="https://front10.com" />
    <Social type="google" rounded url="https://front10.com" />
    <Social type="linkedin" rounded url="https://front10.com" />
    <Social type="livejournal" rounded url="https://front10.com" />
    <Social type="ok" rounded url="https://front10.com" />
    <Social type="pinterest" rounded url="https://front10.com" />
    <Social type="reddit" rounded url="https://front10.com" />
    <Social type="telegram" rounded url="https://front10.com" />
    <Social type="tumblr" rounded url="https://front10.com" />
    <Social type="twitter" rounded url="https://front10.com" />
    <Social type="viber" rounded url="https://front10.com" />
    <Social type="vk" rounded url="https://front10.com" />
    <Social type="whatsapp" rounded url="https://front10.com" />
</>`,
      tabsActive: []
    }
  ]
};
