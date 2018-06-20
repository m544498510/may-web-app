import React from 'react';
import PropTypes from 'prop-types';

export default function Panel({ title, className, children }) {
  let panelTitle = '';
  if (title) {
    panelTitle = (
      <div className="panel-heading">
        <h4 className="panel-title">{title}</h4>
      </div>
    );
  }
  return (
    <div className={`panel ${className}`} >
      {panelTitle}
      <div className="panel-body">
        {children}
      </div>
    </div>
  );
}
Panel.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
Panel.defaultProps = {
  title: null,
  className: '',
};
