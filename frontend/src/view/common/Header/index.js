import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, Icon } from 'antd';

import { logout } from '~/core/api/user';
import paths from '../../routeCfg';
import './index.less';

const MenuItem = Menu.Item;

export default class Header extends Component {
  logoutHandle = () => {
    logout()
      .then(() => {

      });
  };

  renderMenu() {
    return (
      <Menu className="user-menu">
        <MenuItem>
          <Link to={paths.psdManagerPage}>
            <i className="icon-key" />密码管理
          </Link>
        </MenuItem>
        <Menu.Divider key="divider" className="divider" />
        <MenuItem>
          <a onClick={this.logoutHandle}>
            <Icon type="logout"/>登出
          </a>
        </MenuItem>
      </Menu>
    );
  }

  render() {
    return (
      <div className="header">
        <div className="logo">May&apos;s site</div>
        <div className="right-tool-box">
          <Dropdown overlay={this.renderMenu()}>
            <div className="user-box">
              <Icon type="user" />xxx
            </div>
          </Dropdown>
        </div>
      </div>
    );
  }
}
