import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Panel extends Component {
  static propTypes = {
    title: PropTypes.string,
    className: PropTypes.string
  };
  
  render() {
    let panelTitle = '';
    if (this.props.title) {
      panelTitle = (
        <div className="panel-heading">
          <h4 className="panel-title">{this.props.title}</h4>
        </div>
      );
    }
    return (
      <div className={`panel ${this.props.className}`} >
        {panelTitle}
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}
