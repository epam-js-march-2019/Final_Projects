import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/red';

const rawTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#69696a',
      main: '#28282a',
      dark: '#1e1e1f',
    },
    secondary: {
      light: '#FFF5F8',
      main: '#ff3366',
      dark: '#ffc071',
    },
    accent: {
      light: '#fff5f8',
      pink: '#ff3366',
      dark: '#e62958',
    },
  },
});

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
};
  export default theme