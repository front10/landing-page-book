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
        <GithubButton className="mr-3" username="front10" repository="landing-page-book" btnType="fork" btnText="Fork" color="secondary"/>
        <GithubButton className="mr-3" username="front10" repository="landing-page-book" btnType="follow" btnText="Follow" color="secondary"/>
        <GithubButton className="mr-3" username="front10" repository="landing-page-book" btnType="star" btnText="Stars" color="secondary"/>
    </div>
    <div>
        <GithubButton className="mr-3" username="front10" repository="landing-page-book" btnType="watch" btnText="Watch" color="secondary"/>
        <GithubButton className="mr-3" username="front10" repository="landing-page-book" btnType="issue" btnText="Issues" color="secondary"/>
        <GithubButton className="mr-3" username="front10" repository="landing-page-book" btnType="download" btnText="Download" showCounter={false} color="secondary"/>
    </div>
</React.Fragment>`,
      tabsActive: []
    }
  ]
};
