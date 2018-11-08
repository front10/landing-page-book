import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactFlagsSelect from 'react-flags-select';
import withStyles from '../../helpers/WithStyles';

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSelect = this.onSelect.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  componentDidUpdate(prevProps) {
    this.onUpdate(prevProps);
  }

  onUpdate(prevProps) {
    const { selectedLanguage } = this.props;
    if (prevProps.selectedLanguage !== selectedLanguage) {
      this.refs.languageSwitcher.updateSelected(selectedLanguage); // eslint-disable-line
    }
  }

  onSelect(countryCode) {
    const { onSelect } = this.props;
    onSelect({ language: countryCode });
  }

  render() {
    const {
      selectedLanguage,
      languages,
      placeholder,
      showLabel,
      disabled,
      customLabels,
      showOptionLabel,
      showFlag,
      showArrow,
      className
    } = this.props;
    return (
      <div
        className={` ${className} LanguageSwitcher ${!showFlag ? 'LanguageSwitcher--noflag' : ''} ${
          !showArrow ? 'LanguageSwitcher--noarrow' : ''
        }`}
      >
        <ReactFlagsSelect
          ref="languageSwitcher" // eslint-disable-line
          defaultCountry={selectedLanguage}
          disabled={disabled}
          countries={languages}
          customLabels={customLabels}
          placeholder={placeholder}
          showSelectedLabel={showLabel}
          showOptionLabel={showOptionLabel}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

LanguageSwitcher.propTypes = {
  /**
   * Show or hide the label of selected language.
   */
  showLabel: PropTypes.bool,
  /**
   * Disable or enable the component.
   */
  disabled: PropTypes.bool,
  /**
   * Show or hide labels in option list.
   */
  showOptionLabel: PropTypes.bool,
  /**
   * Show or hide flags.
   */
  showFlag: PropTypes.bool,
  /**
   * Show or hide arrow expand.
   */
  showArrow: PropTypes.bool,
  /**
   * Selected language.
   */
  selectedLanguage: PropTypes.string,
  /**
   *  Placeholder to show when not selected language.
   */
  placeholder: PropTypes.string,
  /**
   * Array of languages to show, an array with countries codes. The complete list of countries can be found https://github.com/ekwonye-richard/react-flags-select/blob/master/src/countries.js
   */
  languages: PropTypes.arrayOf(PropTypes.string),
  /**
   * Configure label of languages.
   */
  customLabels: PropTypes.objectOf(PropTypes.any),
  /**
   * Class to apply.
   */
  className: PropTypes.string,
  /**
   * Called when language selection change. Params `{language}`
   */
  onSelect: PropTypes.func
};
LanguageSwitcher.defaultProps = {
  showLabel: false,
  disabled: false,
  showOptionLabel: true,
  showFlag: true,
  showArrow: true,
  selectedLanguage: '',
  placeholder: 'Language',
  languages: [],
  customLabels: {},
  className: '',
  onSelect: () => {}
};

export default withStyles(LanguageSwitcher);
