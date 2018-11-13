import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Input from '../../../src/components/Input';
import './style.css';

class DocGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialpropsDescription: null,
      propsDescription: props.propsDescription,
      active: props.active
    };
    this.filterList = this.filterList.bind(this);
  }

  componentDidMount() {
    const { propsDescription } = this.props;
    this.setState({ propsDescription, initialpropsDescription: propsDescription });
  }

  filterList({ value }) {
    const { initialpropsDescription } = this.state;
    const propsDesc = {};
    Object.keys(initialpropsDescription).filter(item => {
      if (item.toLowerCase().search(value.toLowerCase()) !== -1) {
        propsDesc[item] = initialpropsDescription[item];
      }
    });
    this.setState({ propsDescription: propsDesc });
  }

  render() {
    const { propsDescription, active } = this.state;
    return (
      <React.Fragment>
        <div className="filter-list">
          <Input
            icon="fa fa-search"
            size="sm"
            placeholder="Filter props"
            onChange={this.filterList}
          />
        </div>
        <div className="table-props">
          <table
            className={`table table-striped table-fixed m-0 table-sm ${
              active.indexOf('readme') === -1 ? 'playgroundProperties--rounded' : ''
            }`}
          >
            <thead>
              <tr>
                <th scope="row">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Summary</th>
                <th scope="col">Default</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(propsDescription).map(prop => (
                <tr key={prop}>
                  <td>
                    <span className="propName">{prop}</span>
                  </td>
                  <td>
                    {' '}
                    <span className="propType">{propsDescription[prop].type.name}</span>
                  </td>
                  <td>{ReactHtmlParser(propsDescription[prop].description)}</td>
                  <td>
                    <code>
                      {propsDescription[prop].defaultValue
                        ? propsDescription[prop].defaultValue.value
                        : ReactHtmlParser('<span class="text-required">* required </span>')}
                    </code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

DocGenerator.propTypes = {
  propsDescription: PropTypes.objectOf(PropTypes.any),
  active: PropTypes.arrayOf(PropTypes.string)
};

DocGenerator.defaultProps = {
  propsDescription: {},
  active: ['']
};

export default DocGenerator;
