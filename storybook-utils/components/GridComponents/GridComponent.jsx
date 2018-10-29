import React from 'react';
import PropTypes from 'prop-types';
import { Features, Header, Input } from '../../../src/components';
import '../../../src/components/Features/style.css';
import '../../../src/components/Header/style.css';
import '../../../src/components/Input/style.css';
import '../../../src/components/Button/style.css';
import './style.css';

class GridComponent extends React.Component {
  static NotFound() {
    return (
      <Header className="text-center p-5" type="h2">
        Search not found
      </Header>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      components: props.components,
      filter: [],
      search: ''
    };
    this.paintList = this.paintList.bind(this);
    this.performanceSearch = this.performanceSearch.bind(this);
  }

  paintList() {
    const { filter, components, search } = this.state;
    const items = search ? filter : components;
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

  performanceSearch(event) {
    this.setState({ search: event.value }, () => {
      const { search, components } = this.state;
      if (search === '') this.setState({ filter: [] });
      const filter = components.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      this.setState({ filter });
    });
  }

  render() {
    const { search, filter } = this.state;
    return (
      <div className="page">
        <div className="container p-5">
          <Header type="h1">Browser components</Header>
          <Input
            label="Search components"
            value={search}
            icon="fa fa-search"
            onChange={this.performanceSearch}
            placeholder="Filter components"
          />
          {filter.length === 0 && search ? this.NotFound : this.paintList()}
        </div>
      </div>
    );
  }
}

GridComponent.propTypes = {
  components: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
      link: PropTypes.string,
      category: PropTypes.string
    })
  )
};

GridComponent.defaultProps = {
  components: []
};

export default GridComponent;
