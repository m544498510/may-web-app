import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, Icon } from 'antd';

import { logout } from '~/api/user';
import { paths } from '../../routeCfg';
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
      <Menu>
        <MenuItem>
          <Link to={paths.psdManagerPage}>密码管理</Link>
        </MenuItem>
        <Menu.Divider key="divider" className="divider" />
        <MenuItem>
          <a onClick={this.logoutHandle}>1登出</a>
          <a>Anchor Content!</a>
        </MenuItem>
      </Menu>
    );
  }

  render() {
    return (
      <div className="header">
        <div className="logo">May&apos;s site</div>
        <div className="right-tool-box">
          <Dropdown menu={this.renderMenu()}>
            <Icon type="user" />
            <a href="xxx">xxx</a>
          </Dropdown>
        </div>
      </div>
    );
  }
}
