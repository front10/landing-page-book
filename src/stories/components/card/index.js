import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import jsxConfig from '../../mock/jsxConfig';
import { Card } from '../../../components';
import Readme from '../../../components/Card/README.md';

setAddon(JSXAddon);
const stories = storiesOf('Components/Card', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <Card
            showBorder={boolean('Show border', true)}
            imageCircle={boolean('Image cilcle', true)}
            imageBorder={boolean('Image border', false)}
            title={text('Title', 'Front10 landing page')}
            subTitle={text('Sub title', 'This is a card example')}
            summary={text(
              'Summary',
              'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
            )}
            image={text('Image', 'https://www.softwarefx.com/products/images/icon-developer.png')}
            contentAlign={select('Content align', {
              center: 'center',
              left: 'left',
              right: 'right'
            })}
          />
        </div>
      </div>
    </ThemeSelector>
  )),
  jsxConfig
);

stories.addWithJSX(
  'Children',
  withReadme([Readme], () => (
    <ThemeSelector>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <Card
            showBorder={boolean('Show border', true)}
            imageCircle={boolean('Image cilcle', true)}
            imageBorder={boolean('Image border', false)}
            title={text('Title', 'Front10 landing page')}
            subTitle={text('Sub title', 'This is a card example')}
            summary={text(
              'Summary',
              'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
            )}
            image={text('Image', 'https://www.softwarefx.com/products/images/icon-developer.png')}
            contentAlign={select('Content align', {
              center: 'center',
              left: 'left',
              right: 'right'
            })}
          >
            <button className="btn btn-primary mr-1" type="submit">
              {'Accept'}
            </button>
            <button className="btn btn-danger ml-1" type="submit">
              {'Decline'}
            </button>
          </Card>
        </div>
      </div>
    </ThemeSelector>
  )),
  jsxConfig
);
