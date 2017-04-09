import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { //dark theme
  green900, green500, green800,
  teal900, teal500,
  blueGrey800,
  grey50,
  cyan500,
  grey300
} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

export const darkMuiTheme = getMuiTheme(darkBaseTheme, {
  pallete: {
    primary1Color: blueGrey800,
    primary2Color: green900,
    primary3Color: teal900,
    accent1Color: green500,
    accent2Color: teal500,
    accent3Color: cyan500,
    textColor: grey50,
    alternateTextcolor: grey50
  },
  appBar: {
    height: 50,
  },
  drawer: {
    height: 50,
  }
});
