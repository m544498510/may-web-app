import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Table, Button} from 'antd';

const {Column} = Table;

export default class SecretTable extends PureComponent {
  render() {
    return (
      <Table
        className="secret-table"
      >
        <Column
          title="Site Name"
          dataIndex="siteName"
          key="siteName"
        />
        <Column
          title="User Name"
          dataIndex="name"
          key="userName"
        />
        <Column
          title="Password"
          dataIndex="password"
          key="password"
          render={(text, item) => {
            let psd = '******';
            if (item.isShowPsd) {
              psd = item.password;
            }
            return (
              <div>
                <span>{psd}</span>
                <div className="right-box">
                  <Button
                    circle={true}
                    icon={}
                  />
                  <CopyToClipboard
                    text={item.password}
                  >
                    <Button
                      icon="copy"
                      
                      
                    />
                  </CopyToClipboard>
                </div>
              </div>
            );
          }}
        />
      </Table>
    );
  }
}
