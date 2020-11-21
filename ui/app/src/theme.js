import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    common: {
      black: "#000",
      white: "rgba(255, 255, 255, 1)"
    },
    background: {
      paper: "rgba(18, 18, 18, 1)",
      default: "rgba(18, 18, 18, 1)"
    },
    primary: {
      light: "rgba(224, 183, 222, 1)",
      main: "rgba(164, 107, 184, 1)",
      dark: "rgba(178, 49, 184, 1)",
      contrastText: "rgba(8, 0, 0, 1)"
    },
    secondary: {
      light: "rgba(135, 177, 164, 1)",
      main: "rgba(103, 182, 147, 1)",
      dark: "rgba(79, 126, 126, 1)",
      contrastText: "rgba(0, 0, 0, 1)"
    },
    error: {
      light: "rgba(218, 128, 153, 1)",
      main: "rgba(248, 83, 119, 1)",
      dark: "rgba(206, 26, 82, 1)",
      contrastText: "rgba(12, 1, 1, 1)"
    },
    text: {
      primary: "rgba(250, 250, 250, 0.87)",
      secondary: "rgba(252, 248, 248, 0.54)",
      disabled: "rgba(177, 171, 171, 0.38)",
      hint: "rgba(124, 122, 122, 0.38)"
    }
  }
});

export default theme;