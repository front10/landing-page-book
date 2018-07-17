import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, boolean} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {Features} from '../../../components';
import Readme from '../../../components/Features/README.md';

const stories = storiesOf('Components', module);


stories.addDecorator(withKnobs);

stories.add('Features', withReadme([Readme], () => {
return (
  <ThemeSelector>
    <div className="row mt-5 d-flex justify-content-center">
      <div className=" col-md-3">
        <Features 
          cardClass="bg-dark"
          showImage
          imageSrc="images/features/dashboard.png"
          imageClass="bg-white"
          imageAlt="Features example"
          showTitle
          titleText="Features"
          titleClass="text-white"
          showSubTitle
          subTitleText="dark theme"
          subTitleClass="text-white"
          showDescriptionText
          descriptionText="React component to show all your project features!"
          descriptionClass="text-white"
          showFooter
          footerClass=""
          showFooterLink
          footerLinkText="See more..."
          footerLinkClass=""
          footerLinkHref="#!"
        />
      </div>
      <div className=" col-md-3">
        <Features 
          cardClass="bg-primary"
          showImage
          imageSrc="images/features/dashboard.png"
          imageClass="bg-white"
          imageAlt="Features example"
          showTitle
          titleText="Features"
          titleClass="text-white"
          showSubTitle
          subTitleText="Blue theme"
          subTitleClass="text-white"
          showDescriptionText
          descriptionText="React component to show all your project features!"
          descriptionClass="text-white"
          showFooter
          footerClass=""
          showFooterLink
          footerLinkText="See more..."
          footerLinkClass="text-white"
          footerLinkHref="#!"
        />
      </div>
      <div className=" col-md-6">
        <Features 
          cardClass={text("Card class", '')}
          showImage={boolean("Show image", true)}
          imageSrc={text("Image src", 'images/features/dashboard.png')}
          imageClass={text("Image class", '')}
          imageAlt={text("Image alt text", 'dashboard')}
          showTitle={boolean("Show title", true)}
          titleText={text("Title text", 'Feature')}
          titleClass={text("Title class", '')}
          showSubTitle={boolean("Show subtitle", true)}
          subTitleText={text("SubTitle text", 'Feature')}
          subTitleClass={text("SubTitle class", '')}
          showDescriptionText={boolean("Show description text", true)}
          descriptionText={text("Description text", 'React component to show all your project features!')}
          descriptionClass={text("Description class", '')}
          showFooter={boolean("Show footer", true)}
          footerClass={text("Footer class", '')}
          showFooterLink={boolean("Show footer link", true)}
          footerLinkText={text("Footer text", 'See more...')}
          footerLinkClass={text("Footer class", '')}
          footerLinkHref={text("Footer link href", '#!')}
        />
      </div>
    </div>
  
  </ThemeSelector>
);
}));