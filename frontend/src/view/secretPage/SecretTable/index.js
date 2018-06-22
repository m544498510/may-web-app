import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'antd';

const { Column, ColumnGroup } = Table;

export default class SecretTable  extends Component{
  render(){
    return (
      <Table
        className="secret-table"
      >
        <Column
          title="Age"
          dataIndex="age"
          key="age"

        />
      </Table>
    );
  }
}
