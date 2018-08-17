import React from 'react';
import PropTypes from 'prop-types';
import ThemeBuilderService from '../../service/ThemeBuilder.services';
import Input from '../Input';
import Row from '../Row';
import Column from '../Column';
import Label from '../Label';
import Icon from '../Icon';
import Button from '../Button';

export default class ThemeBuilder extends React.Component {
  static isColor({ val }) {
    return /^#[0-9A-F]{6}$/i.test(val);
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.getVariables = this.getVariables.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onUpdateTheme = this.onUpdateTheme.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
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

  onUpdateTheme() {
    const { variables } = this.state;
    const { onUpdateTheme } = this.props;
    onUpdateTheme({ variables });
  }

  onChangeValue({ value, variable }) {
    const { variables } = this.state;
    variables[variable] = value;
    this.setState({ variables });
  }

  getVariables() {
    const { theme } = this.props;
    this.setState({ loading: true }, () => {
      ThemeBuilderService.variables({ theme }).then(response => {
        this.setState({ variables: response, loading: false });
      });
    });
  }

  render() {
    const { variables, loading } = this.state;
    const { updating } = this.props;
    const keys = Object.keys(variables);
    return (
      <React.Fragment>
        <ul className="list-group">
          {!loading &&
            Object.values(variables).map((variable, index) => {
              const val = variable.toString();
              return (
                <li className="list-group-item border-0" key={keys[index]}>
                  <Row>
                    <Column className="col-12 col-md-6">
                      <Label label={keys[index]} />
                    </Column>
                    <Column className="col-12 col-md-6">
                      <Input
                        type={ThemeBuilder.isColor({ val }) ? 'color' : 'text'}
                        value={val}
                        onChange={({ value }) =>
                          this.onChangeValue({ value, variable: keys[index] })
                        }
                      />
                    </Column>
                  </Row>
                </li>
              );
            })}
          {loading && (
            <li className="list-group-item text-center">
              <div>
                <Icon icon="fa fa-circle-o-notch fa-spin" />
              </div>
              <div>Loading variables...</div>
            </li>
          )}
        </ul>
        <Button
          className="mt-2 pull-right btn-primary"
          disabled={loading}
          onClick={this.onUpdateTheme}
          loading={updating}
        >
          Update theme
        </Button>
      </React.Fragment>
    );
  }
}

ThemeBuilder.propTypes = {
  updating: PropTypes.bool,
  theme: PropTypes.string,
  onUpdateTheme: PropTypes.func
};

ThemeBuilder.defaultProps = {
  updating: false,
  theme: 'default',
  onUpdateTheme: () => {}
};
