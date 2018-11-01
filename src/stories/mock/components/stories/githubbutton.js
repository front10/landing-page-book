export default {
  name: 'GithubButton',
  summary:
    'Showcase the success of any GitHub repo or user with these simple, static buttons with dynamic counts.',
  import: '',
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<GithubButton
    username="front10"
    repository="landing-page-book"
    btnRounded color="primary"
/>`,
      tabsActive: ['code']
    },
    {
      name: 'All',
      summary: '',
      code: `<React.Fragment>
    <div className="mb-3">
        <GithubButton username="front10" repository="landing-page-book" btnType="fork"btnText="Fork"/>
    </div>
    <div className="mb-3">
        <GithubButton username="front10" repository="landing-page-book" btnType="follow" btnText="Follow"/>
    </div>
    <div className="mb-3">
        <GithubButton username="front10" repository="landing-page-book" btnType="star" btnText="Stars"/>
    </div>
    <div className="mb-3">
        <GithubButton username="front10" repository="landing-page-book" btnType="watch" btnText="Watch"/>
    </div>
    <div className="mb-3">
        <GithubButton username="front10" repository="landing-page-book" btnType="issue" btnText="Issues"/>
    </div>
    <div>
        <GithubButton username="front10" repository="landing-page-book" btnType="download" btnText="Download" showCounter={false}/>
    </div>
</React.Fragment>`,
      tabsActive: []
    }
  ]
};
