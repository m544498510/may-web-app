import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Table, Button} from 'antd';
import CopyToClipboard from 'react-copy-to-clipboard';
import {connect} from 'react-redux';

import {getSecretList, getShowPsdIds} from '~/core/modules/secret/selector';

const {Column} = Table;

export class SecretTable extends PureComponent {
  render() {
    const {list, showPsdList} = this.props;
    
    return (
      <Table
        className="secret-table"
        dataSource={list}
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
            if (showPsdList.includes(item.id)) {
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

const mapStateToProps = (state) => ({
  list: getSecretList(state),
  showPsdIds: getShowPsdIds(state),
});
export default connect(mapStateToProps, null)(SecretTable);
