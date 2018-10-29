import React from 'react';
import PropTypes from 'prop-types';
// import { GoRocket } from 'react-icons/go';
// import { Link as LinkScroll, Element } from 'react-scroll';
import {
  // Section,
  // Column,
  Row,
  Features,
  // Link,
  // Card,
  // Icon,
  Header,
  Input
  // Paragraphs,
  // NavbarCollapse,
  // Button
} from '../../../src/components';

import 'bootstrap/dist/css/bootstrap.min.css';

// import PropsManager from '../PropsManager';
import './style.scss';

class GridComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: props.elements,
      filter: [],
      search: ''
    };
    this.paintList = this.paintList.bind(this);
    this.performanceSearch = this.performanceSearch.bind(this);
    this.NotFound = this.NotFound.bind(this);
  }

  NotFound() {
    return (
      <Header className="text-center p-5" type="h2">Search not found</Header>
    );
  }

  paintList() {
    const { filter, elements, search } = this.state;
    const items = search ? filter : elements;
    return (
      <React.Fragment>
        <Features
          shadow={false}
          showTitle
          showImage
          showSubtitle
          imageCircle={false}
          imageBorder={false}
          imageShadow={false}
          showFooter
          outlineButton
          contentAlign="center"
          features={items}
        />
      </React.Fragment>
    );
  }

  // Arreglar el estado porque me devuelve el valor anterior a escribir
  performanceSearch(event) {
    this.setState({ search: event.value });
    const { search, elements } = this.state;
    if (search === '') this.setState({ filter: [] });

    const re = new RegExp(search, 'i');
    const filter = [];
    elements.map(item => {
      if (re.test(item.title)) filter.push(item);
    });
    this.setState({ filter });
  }

  render() {
    const { search, filter } = this.state;
    return (
      <div className="page pt-5 mt-5">
        <div className="container p-5">
          <Header type="h1">Browser components</Header>
          <Input
            label="Search components"
            value={search}
            icon="fa fa-search"
            onChange={this.performanceSearch}
            placeholder="Filter components"
          />
          {filter.length === 0 && search ? this.NotFound() : this.paintList()}
        </div>
      </div>
    );
  }
}

GridComponent.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
      link: PropTypes.string,
      category: PropTypes.string
    })
  )
};

GridComponent.defaultProps = {
  elements: []
};

export default GridComponent;
