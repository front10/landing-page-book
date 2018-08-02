import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Backers, Container } from '../../../components';
import Readme from '../../../components/Backers/README.md';

const backers = [{
    name: "Alberto Roman Vieito",
    profile: "https://twitter.com/romanvieito",
    image: "https://pbs.twimg.com/profile_images/946622143449661440/c_e7BcSM_400x400.jpg",
    contributionAmount: "125"
},{
	name: "Dariel Noel",
	profile: "https://twitter.com/dariel_noel",
	image: "https://pbs.twimg.com/profile_images/954398138516869120/uRSkGwhe_400x400.jpg",
	contributionAmount: "47"
},{
	name: "Yulier Camilo Garrido Garrido",
	profile: "https://twitter.com/ycgarrido",
	image: "https://pbs.twimg.com/profile_images/985858821850415104/88svfp18_400x400.jpg",
	contributionAmount: "200"
},{
	name: "Yoandry Collazo Barroso",
	profile: "https://www.facebook.com/ycbarroso",
	image: "https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/p160x160/33982916_1794458947240880_8061391612997009408_n.jpg?_nc_cat=0&oh=46256828ab9b2f3c3fe3b67cbd9e67c1&oe=5C134566",
	contributionAmount: "250"
},{
	name: "Alberto Roman Vieito",
	profile: "https://twitter.com/romanvieito",
	image: "https://pbs.twimg.com/profile_images/946622143449661440/c_e7BcSM_400x400.jpg",
	contributionAmount: "125"
},{
	name: "Dariel Noel",
	profile: "https://twitter.com/dariel_noel",
	image: "https://pbs.twimg.com/profile_images/954398138516869120/uRSkGwhe_400x400.jpg",
	contributionAmount: "47"
},{
	name: "Yulier Camilo Garrido Garrido",
	profile: "https://twitter.com/ycgarrido",
	image: "https://pbs.twimg.com/profile_images/985858821850415104/88svfp18_400x400.jpg",
	contributionAmount: "200"
},{
	name: "Yoandry Collazo Barroso",
	profile: "https://www.facebook.com/ycbarroso",
	image: "https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/p160x160/33982916_1794458947240880_8061391612997009408_n.jpg?_nc_cat=0&oh=46256828ab9b2f3c3fe3b67cbd9e67c1&oe=5C134566",
	contributionAmount: "250"
},{
	name: "Alberto Roman Vieito",
	profile: "https://twitter.com/romanvieito",
	image: "https://pbs.twimg.com/profile_images/946622143449661440/c_e7BcSM_400x400.jpg",
	contributionAmount: "125"
},{
	name: "Dariel Noel",
	profile: "https://twitter.com/dariel_noel",
	image: "https://pbs.twimg.com/profile_images/954398138516869120/uRSkGwhe_400x400.jpg",
	contributionAmount: "47"
},{
	name: "Yulier Camilo Garrido Garrido",
	profile: "https://twitter.com/ycgarrido",
	image: "https://pbs.twimg.com/profile_images/985858821850415104/88svfp18_400x400.jpg",
	contributionAmount: "200"
},{
	name: "Yoandry Collazo Barroso",
	profile: "https://www.facebook.com/ycbarroso",
	image: "https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/p160x160/33982916_1794458947240880_8061391612997009408_n.jpg?_nc_cat=0&oh=46256828ab9b2f3c3fe3b67cbd9e67c1&oe=5C134566",
	contributionAmount: "250"
},{
	name: "Alberto Roman Vieito",
	profile: "https://twitter.com/romanvieito",
	image: "https://pbs.twimg.com/profile_images/946622143449661440/c_e7BcSM_400x400.jpg",
	contributionAmount: "125"
},{
	name: "Dariel Noel",
	profile: "https://twitter.com/dariel_noel",
	image: "https://pbs.twimg.com/profile_images/954398138516869120/uRSkGwhe_400x400.jpg",
	contributionAmount: "47"
},{
	name: "Yulier Camilo Garrido Garrido",
	profile: "https://twitter.com/ycgarrido",
	image: "https://pbs.twimg.com/profile_images/985858821850415104/88svfp18_400x400.jpg",
	contributionAmount: "200"
},{
	name: "Yoandry Collazo Barroso",
	profile: "https://www.facebook.com/ycbarroso",
	image: "https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/p160x160/33982916_1794458947240880_8061391612997009408_n.jpg?_nc_cat=0&oh=46256828ab9b2f3c3fe3b67cbd9e67c1&oe=5C134566",
	contributionAmount: "250"
},{
	name: "Alberto Roman Vieito",
	profile: "https://twitter.com/romanvieito",
	image: "https://pbs.twimg.com/profile_images/946622143449661440/c_e7BcSM_400x400.jpg",
	contributionAmount: "125"
},{
	name: "Dariel Noel",
	profile: "https://twitter.com/dariel_noel",
	image: "https://pbs.twimg.com/profile_images/954398138516869120/uRSkGwhe_400x400.jpg",
	contributionAmount: "47"
},{
	name: "Yulier Camilo Garrido Garrido",
	profile: "https://twitter.com/ycgarrido",
	image: "https://pbs.twimg.com/profile_images/985858821850415104/88svfp18_400x400.jpg",
	contributionAmount: "200"
},{
	name: "Yoandry Collazo Barroso",
	profile: "https://www.facebook.com/ycbarroso",
	image: "https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/p160x160/33982916_1794458947240880_8061391612997009408_n.jpg?_nc_cat=0&oh=46256828ab9b2f3c3fe3b67cbd9e67c1&oe=5C134566",
	contributionAmount: "250"
},{
	name: "Alberto Roman Vieito",
	profile: "https://twitter.com/romanvieito",
	image: "https://pbs.twimg.com/profile_images/946622143449661440/c_e7BcSM_400x400.jpg",
	contributionAmount: "125"
},{
	name: "Dariel Noel",
	profile: "https://twitter.com/dariel_noel",
	image: "https://pbs.twimg.com/profile_images/954398138516869120/uRSkGwhe_400x400.jpg",
	contributionAmount: "47"
},{
	name: "Yulier Camilo Garrido Garrido",
	profile: "https://twitter.com/ycgarrido",
	image: "https://pbs.twimg.com/profile_images/985858821850415104/88svfp18_400x400.jpg",
	contributionAmount: "200"
},{
	name: "Yoandry Collazo Barroso",
	profile: "https://www.facebook.com/ycbarroso",
	image: "https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/p160x160/33982916_1794458947240880_8061391612997009408_n.jpg?_nc_cat=0&oh=46256828ab9b2f3c3fe3b67cbd9e67c1&oe=5C134566",
	contributionAmount: "250"
}];

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.add('Backers', withReadme([Readme], () => {
  return (
    <ThemeSelector>
      <Container>
        <Backers
          imageRounded={boolean("Image rounded", true)}
          imageBordered={boolean("Image border", true)}
          imageGray={boolean("Gray", false)}
          imageWidth={text("Image width", "50")}
          imageHeight={text("Image height", "50")}
          backers={backers}
        />
      </Container>
    </ThemeSelector>
  );
}));
