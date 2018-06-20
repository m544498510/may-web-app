import React, { Component } from 'react';

import Panel from '~/view/common/Panel';
import ToolBox from '../ToolsBox';
import SecretTable from '../SecretTable';

export default class SecretPanel extends Component {
  render() {
    return (
      <Panel>
        <ToolBox />
        <SecretTable />
      </Panel>
    );
  }
}
