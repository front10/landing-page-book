import React from 'react';
import PropTypes from 'prop-types';
import ThemeBuilderService from '../../service/ThemeBuilder.services';

const style = {
  ul: {
    listStyleType: 'none'
  },
  span: {
    display: 'inline-block',
    width: '48%',
    fontSize: '0.8rem',
    fontFamily:
      '-apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", "Lucida Grande", Arial, sans-serif'
  },
  input: {
    display: 'inline-block',
    width: '48%',
    border: '1px solid #ced4da',
    color: '#495057',
    fontFamily:
      '-apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", "Lucida Grande", Arial, sans-serif'
  },
  li: {
    padding: '5px 0'
  }
};

class ThemeBuilder extends React.Component {
  static isColor({ val }) {
    return /^#[0-9A-F]{6}$/i.test(val);
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.getVariables = this.getVariables.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  componentWillMount() {
    this.setState({ variables: {}, loading: false }, () => {
      this.getVariables();
    });
  }

  componentDidUpdate(prevProps) {
    this.onUpdate(prevProps);
  }

  onUpdate(prevProps) {
    const { theme } = this.props;
    if (prevProps.theme !== theme) this.getVariables();
  }

  onChangeValue({ value, variable }) {
    const { variables } = this.state;
    const iframe = document.getElementById('storybook-preview-iframe');
    if (iframe) {
      const Iframedocument = iframe.contentDocument
        ? iframe.contentDocument
        : iframe.contentWindow.document;
      Iframedocument.body.style.setProperty(variable, value);
      variables[variable] = value;
      this.setState({ variables });
    }
  }

  getVariables() {
    const { theme } = this.props;
    this.setState({ loading: true }, () => {
      ThemeBuilderService.variables({ theme }).then(response => {
        const variables = {};
        const matches = response.match(/(--)(.*?):(.*?);/gi);
        matches.map(item => {
          const values = item.split(':');
          variables[values[0]] = values[1].slice(0, -1).trim();
          return item;
        });
        this.setState({ variables, loading: false });
      });
    });
  }

  render() {
    const { variables, loading } = this.state;
    const { component } = this.props;
    const keys = Object.keys(variables);
    return (
      <ul style={style.ul}>
        {!loading &&
          Object.values(variables).map((variable, index) => {
            const val = variable.toString();
            return keys[index].includes(`--${component}`) ? (
              <li style={style.li} key={keys[index]}>
                <div>
                  <div style={style.span}> {keys[index]} </div>
                  <input
                    style={style.input}
                    type={ThemeBuilder.isColor({ val }) ? 'color' : 'text'}
                    value={val}
                    onChange={$event =>
                      this.onChangeValue({
                        value: $event.target.value,
                        variable: keys[index]
                      })
                    }
                  />
                </div>
              </li>
            ) : null;
          })}
        {loading && (
          <li className="list-group-item text-center">
            <div>
              <i className="fa fa-circle-o-notch fa-spin" />
            </div>
            <div>Loading variables...</div>
          </li>
        )}
      </ul>
    );
  }
}

ThemeBuilder.propTypes = {
  component: PropTypes.string,
  theme: PropTypes.string
};

ThemeBuilder.defaultProps = {
  component: '',
  theme: 'default'
};

export default ThemeBuilder;
