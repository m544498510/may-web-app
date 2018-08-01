import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Input, Button, Icon} from 'antd';
import {connect} from 'react-redux';

import {actions, selectors} from '~/core/modules/secret';

export class ToolsBox extends Component {
  onChange = e => {
    this.props.setKeyword(e.target.value);
  };
  
  render() {
    return (
      <div className="tools-box">
        <div className="left-box">
          <Button
            icon="add"
            type="primary"
            ghost={true}
            shape="circle"
          />
        </div>
        <div className="right-box">
          <Icon type="search"/>
          <Input
            value={this.props.keyword}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  keyword: selectors.getKeyword(state)
});

const mapDispatchToProps = {
  setKeyword: actions.setKeyword
};

export default connect(mapStateToProps, mapDispatchToProps)(ToolsBox);
