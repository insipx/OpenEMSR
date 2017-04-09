//libraries
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

//styles
import { darkMuiTheme } from '../styles';

//Components
import Header from './header';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchtap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class App extends Component {
  render() {
    console.log(darkMuiTheme);
    return (
      <MuiThemeProvider muiTheme={darkMuiTheme}>
        <Header children={this.props.children} />
      </MuiThemeProvider>
    );
  }
}
