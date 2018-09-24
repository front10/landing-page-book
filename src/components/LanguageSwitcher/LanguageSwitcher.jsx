import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactFlagsSelect from 'react-flags-select';

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
      showArrow
    } = this.props;
    return (
      <div
        className={`LanguageSwitcher ${!showFlag ? 'LanguageSwitcher--noflag' : ''} ${
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
  showLabel: PropTypes.bool,
  disabled: PropTypes.bool,
  showOptionLabel: PropTypes.bool,
  showFlag: PropTypes.bool,
  showArrow: PropTypes.bool,
  selectedLanguage: PropTypes.string,
  placeholder: PropTypes.string,
  languages: PropTypes.arrayOf(PropTypes.string),
  customLabels: PropTypes.objectOf(PropTypes.any),
  onSelect: PropTypes.func
};
LanguageSwitcher.defaultProps = {
  showLabel: false,
  disabled: false,
  showOptionLabel: true,
  showFlag: true,
  showArrow: true,
  selectedLanguage: 'US',
  placeholder: 'Language',
  languages: [],
  customLabels: {},
  onSelect: () => {}
};

export default LanguageSwitcher;
