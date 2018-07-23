import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactFlagsSelect from 'react-flags-select';

class LanguageSwitcher extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.onSelect = this.onSelect.bind(this);
	}

	componentWillMount() {
		this.setState({selectedLanguage: this.props.selectedLanguage});
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.selectedLanguage !== this.state.selectedLanguage) {
			this.setState({selectedLanguage: nextProps.selectedLanguage}, () => {
				this.refs.languageSwitcher.updateSelected(nextProps.selectedLanguage);
			});
		}
	}

	onSelect(countryCode) {
		this.setState({selectedLanguage: countryCode}, () => {
			this.props.onSelect({language: countryCode});
		});
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
			showFlag
		} = this.props;
		return <div className={`LanguageSwitcher ${!showFlag ? 'LanguageSwitcher--noflag' : ''}`}>
			<ReactFlagsSelect
				ref="languageSwitcher"
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
	}
}

LanguageSwitcher.propTypes = {
	showLabel: PropTypes.bool,
	disabled: PropTypes.bool,
	showOptionLabel: PropTypes.bool,
	showFlag: PropTypes.bool,
	selectedLanguage: PropTypes.string,
	placeholder: PropTypes.string,
	languages: PropTypes.array,
	customLabels: PropTypes.object,
	onSelect: PropTypes.func,
};
LanguageSwitcher.defaultProps = {
	showLabel: false,
	disabled: false,
	showOptionLabel: true,
	showFlag: true,
	selectedLanguage: "US",
	placeholder: "Language",
	languages: [],
	customLabels: {},
	onSelect: ({language}) => {
		console.warn(`onSelect prop is not defined. Language ${language}`)
	},
};

export default LanguageSwitcher;
