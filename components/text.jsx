import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ content, children, className, style }) => {
    return (
        <p
            className={className}
            style={style}
        >
            {content||children}
        </p>
    )
};

Text.propTypes = {
    content: PropTypes.oneOfType([
        PropTypes.string, PropTypes.number, PropTypes.element
    ]),
    className: PropTypes.string,
    style: PropTypes.object
}

export default Text;