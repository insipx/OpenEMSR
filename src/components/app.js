import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchtap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar
          title="OpenEMSR" iconClassNameRight="muidocs-icon-navigation-expand-more" >
          {this.props.children}
        </AppBar>
      </MuiThemeProvider>
    );
  }
}
