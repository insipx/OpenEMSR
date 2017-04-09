import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import Menu from './menu';
import {Title} from './title';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.muiTheme);
    return (
    <AppBar
      showMenuIconButton={false}
      iconElementRight={
          <Title title="OpenEMSR" />}
    >
      <Menu open={true} />
      {this.props.children}
    </AppBar>
    );
  }
}
