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
    color="secondary"
/>`,
      tabsActive: ['code']
    },
    {
      name: 'All',
      summary: '',
      code: `<React.Fragment>
    <div className="mb-3">
        <GithubButton className="mr-3" username="front10" repository="landing-page-book" type="fork" text="Fork" color="secondary" />
        <GithubButton className="mr-3" username="front10" repository="landing-page-book" type="follow" text="Follow" color="secondary" />
        <GithubButton className="mr-3" username="front10" repository="landing-page-book" type="star" text="Stars" color="secondary"/>
    </div>
    <div>
        <GithubButton className="mr-3" username="front10" repository="landing-page-book" type="watch" text="Watch" color="secondary" />
        <GithubButton className="mr-3" username="front10" repository="landing-page-book" type="issue" text="Issues" color="secondary" />
        <GithubButton className="mr-3" username="front10" repository="landing-page-book" type="download" text="Download" showCounter={false} color="secondary" />
    </div>
</React.Fragment>`,
      tabsActive: []
    }
  ]
};
