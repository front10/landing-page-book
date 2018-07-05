import React from 'react';
import PropTypes from 'prop-types';
import addons from '@storybook/addons';

/* eslint-disable */
export class ThemeSelector extends React.Component {

    componentDidMount() {
        this.init();
    }

    init() {
        if (!document.getElementById("story-book-themes")) {
            let root = document.getElementById("root");
            if (root)
                root.style.display = "none";
            let theme = localStorage.getItem("selector-current-theme") || "default";
            let link = document.createElement("link");
            link.setAttribute("type", "text/css");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", `themes/${theme}/style/index.css`);
            link.setAttribute("id", "story-book-themes");
            link.onload = function() {
                root.style.display = "block";
            };
            document.head.appendChild(link);
        }
    }

    render() {
        const {
            children
        } = this.props;
        const channel = addons.getChannel();

        channel.emit('theme/switch');
        return children;
    }
}

ThemeSelector.propTypes = {
    children: PropTypes.any
};

ThemeSelector.defaultProps = {
    children: ''
};