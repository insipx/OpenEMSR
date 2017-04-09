import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import Menu from './menu';
import {Title} from './title';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   console.log("MUITHEME:" + this.props.muiTheme);
    return (
    <div>
      <AppBar
        showMenuIconButton={false}
        style={{marginBottom: 30}}
        iconElementRight={
            <Title title="OpenEMSR" />}
      >
        <Menu open={true} />
      </AppBar>
      {this.props.children}
    </div>
    );
  }
}
