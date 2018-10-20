import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Page = ({ content, children, className, style }) => {
    className = classNames([
        'page', className
    ]);

    return (
        <div
            className={className}
            style={style}
        >
            {content||children}
        </div>
    );
};

Page.propTypes = {
    content: PropTypes.oneOfType([
        PropTypes.string, PropTypes.number, PropTypes.element
    ]),
    className: PropTypes.string,
    style: PropTypes.object
};

export default Page;