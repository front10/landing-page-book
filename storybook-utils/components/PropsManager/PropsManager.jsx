/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import ReactElementToJsxString from 'react-element-to-jsx-string';
import Playground from 'component-playground';
import Row from '../../../src/components/Row';
import Column from '../../../src/components/Column';
import Icon from '../../../src/components/Icon';
import './style.scss';

class PropsManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.codeRef = React.createRef();
    this.toggleCode = this.toggleCode.bind(this);
    this.toggleProps = this.toggleProps.bind(this);
  }

  componentWillMount() {
    const {
      children,
      showDefaultProps,
      showFunctions,
      sortProps,
      maxInlineAttributesLineLength
    } = this.props;
    const { props } = children;
    const element = React.createElement(children.type, props);
    this.setState({
      codeExpanded: true,
      propsExpanded: true,
      element: ReactElementToJsxString(element, {
        showDefaultProps,
        showFunctions,
        sortProps,
        maxInlineAttributesLineLength
      })
    });
  }

  toggleCode() {
    const { codeExpanded } = this.state;
    this.setState({ codeExpanded: !codeExpanded }, () => {
      if (this.codeRef.current.childNodes[0] && this.codeRef.current.childNodes[0].childNodes[0])
        if (codeExpanded) this.codeRef.current.childNodes[0].childNodes[0].classList.add('d-none');
        else this.codeRef.current.childNodes[0].childNodes[0].classList.remove('d-none');
    });
  }

  toggleProps() {
    const { propsExpanded } = this.state;
    this.setState({ propsExpanded: !propsExpanded });
  }

  render() {
    const { scope } = this.props;
    const { codeExpanded, element } = this.state;

    return (
      <React.Fragment>
        <div className="PropsManager__Code" ref={this.codeRef}>
          <Playground codeText={element} scope={scope} />
        </div>
        <div
          className="PropsManager__Button PropsManager__Button__Code"
          style={{
            borderTopLeftRadius: !codeExpanded ? '5px' : '0px',
            borderTopRightRadius: !codeExpanded ? '5px' : '0px'
          }}
          onClick={this.toggleCode}
        >
          <Row>
            <Column className="text-center">
              <span>
                <Icon icon="fa fa-code" className="mr-2" />
                {codeExpanded ? 'Hide code' : 'Show code'}
              </span>
            </Column>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

PropsManager.propTypes = {
  children: PropTypes.node.isRequired,
  scope: PropTypes.objectOf(PropTypes.any),
  showDefaultProps: PropTypes.bool,
  showFunctions: PropTypes.bool,
  sortProps: PropTypes.bool,
  maxInlineAttributesLineLength: PropTypes.number
};

PropsManager.defaultProps = {
  showDefaultProps: false,
  showFunctions: false,
  sortProps: false,
  maxInlineAttributesLineLength: undefined,
  scope: { React }
};

export default PropsManager;
/* eslint-enable no-underscore-dangle */
/* eslint-enable jsx-a11y/click-events-have-key-events */
/* eslint-enable jsx-a11y/no-static-element-interactions */
