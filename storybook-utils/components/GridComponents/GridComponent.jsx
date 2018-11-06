import React from 'react';
import PropTypes from 'prop-types';
import { Header, Input, Link, Row, Column, Card, Section } from '../../../src/components';
import '../../../src/components/Features/style.css';
import '../../../src/components/Header/style.css';
import '../../../src/components/Input/style.css';
import '../../../src/components/Button/style.css';
import './style.css';

class GridComponent extends React.Component {
  static NotFound() {
    return (
      <React.Fragment>
        <Header className="text-center p-5" type="h2">
          Component not found
        </Header>
        <div className="not-found">
          <span className="fa fa-th-large" />
        </div>
      </React.Fragment>
    );
  }

  static paintItems(components) {
    return (
      <Row>
        {components.map(component => (
          <Column key={component} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Link href={`/components/${component.toLowerCase()}`} tooltip="View more details">
              <Card
                border={false}
                margin="2"
                showBorder={false}
                imageCircle={false}
                imageBorder={false}
                shadow={false}
                title={component}
                image={`/images/components/${component.toLowerCase()}.svg`}
              />
            </Link>
          </Column>
        ))}
      </Row>
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
      <Row className="p-3">
        {items.map(item => (
          <Section
            key={item.name}
            className="grid-component"
            title={item.name}
            subTitle={item.description}
            titleTextAlign="left"
            subTitleTextAlign="left"
          >
            {GridComponent.paintItems(item.components)}
          </Section>
        ))}
      </Row>
    );
  }

  performanceSearch(event) {
    this.setState({ search: event.value }, () => {
      const { search, components } = this.state;
      if (search === '') this.setState({ filter: [] });
      const filter = [
        {
          name: 'Results',
          description: '',
          components: []
        }
      ];
      components.map(component => {
        component.components.filter(item => {
          if (item.toLowerCase().includes(search.toLowerCase())) filter[0].components.push(item);
        });
      });
      filter[0].description = `${filter[0].components.length} matches have been found`;
      this.setState({ filter });
    });
  }

  render() {
    const { search, filter } = this.state;
    return (
      <div className="page">
        <div className="container p-5">
          <Input
            value={search}
            icon="fa fa-search"
            onChange={this.performanceSearch}
            placeholder="Search components and elements ..."
          />
          {search && filter.length !== 0 && filter[0].components.length === 0
            ? GridComponent.NotFound()
            : this.paintList()}
        </div>
      </div>
    );
  }
}

GridComponent.propTypes = {
  components: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any))
};

GridComponent.defaultProps = {
  components: []
};

export default GridComponent;
