import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import Menu from './menu';


export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <AppBar
      title="OpenEMSR"
      showMenuIconButton={false}
    >
      <Menu open={true} />
      {this.props.children}
    </AppBar>
    );
  }

}
