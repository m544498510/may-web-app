import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Input, Button, Icon} from 'antd';


export default class ToolsBox extends Component {
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
          <Input/>
        </div>
      </div>
    );
  }
}
