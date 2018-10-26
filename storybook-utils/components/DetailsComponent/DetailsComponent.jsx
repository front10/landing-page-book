import React from 'react';
import { Section } from '../../../src/components';
import './style.scss';

class DetailsComponent extends React.Component {
  render() {
    return (
      <div id="container" className="page">
        <div className="row">
          <div className="col-12 col-md-10">
            <Section
              sectionClass="content-primary"
              gray
              title="Introduction"
              subTitle="Once upon a time..."
            >
              <div className="mockup-content">
                <p>Click the button to see it expanding into a fullscreen overlay:</p>
                <p>
                  Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra
                  azuki bean corn fava bean mustard tigernut juccama green bean celtuce collard
                  greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet watercress
                  potato tigernut corn groundnut. Chickweed okra pea winter purslane coriander
                  yarrow sweet pepper radish garlic brussels sprout groundnut summer purslane
                  earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna
                  black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon
                  radish asparagus spinach.
                </p>
                <p>
                  Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra
                  azuki bean corn fava bean mustard tigernut juccama green bean celtuce collard
                  greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet watercress
                  potato tigernut corn groundnut. Chickweed okra pea winter purslane coriander
                  yarrow sweet pepper radish garlic brussels sprout groundnut summer purslane
                  earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna
                  black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon
                  radish asparagus spinach.
                </p>
                <p>
                  Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra
                  azuki bean corn fava bean mustard tigernut juccama green bean celtuce collard
                  greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet watercress
                  potato tigernut corn groundnut. Chickweed okra pea winter purslane coriander
                  yarrow sweet pepper radish garlic brussels sprout groundnut summer purslane
                  earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna
                  black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon
                  radish asparagus spinach.
                </p>
                <p>
                  Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra
                  azuki bean corn fava bean mustard tigernut juccama green bean celtuce collard
                  greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet watercress
                  potato tigernut corn groundnut. Chickweed okra pea winter purslane coriander
                  yarrow sweet pepper radish garlic brussels sprout groundnut summer purslane
                  earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna
                  black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon
                  radish asparagus spinach.
                </p>
              </div>
            </Section>
          </div>
          <div className="col-12 col-md-2 index">
            <ul className="section-nav">
              <li className="toc-entry toc-h2">
                <a href="index.html#common-values">Common values</a>
              </li>
              <li className="toc-entry toc-h2">
                <a href="index.html#fixed-top">Fixed top</a>
              </li>
              <li className="toc-entry toc-h2">
                <a href="index.html#fixed-bottom">Fixed bottom</a>
              </li>
              <li className="toc-entry toc-h2">
                <a href="index.html#sticky-top">Sticky top</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

DetailsComponent.propTypes = {
  // name: PropTypes.string,
  // description: PropTypes.string,
  // storyName: PropTypes.string
};

DetailsComponent.defaultProps = {
  // name: 'Awesome',
  // description: 'The awesome component is used to spread awesoness across the world',
  // storyName: 'Basic'
};

export default DetailsComponent;
