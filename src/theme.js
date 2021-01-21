import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#046d32',
      light: '#e2ffc596',
      dark: '#045828',
    },
    secondary: {
      main: '#ff5700',
      light: '#ee925c',
      dark: '#f38038',
    },
    complementary: {
      main: '#6c757d',
      light: '#f2f2f2',
      dark: '#343a40',
    },
    success: {
      main: '#28a745'
    },
    info: {
      main: '#17a2b8',
    },
    warning: {
      main: '#ffc107'
    },
    danger: {
      main: '#dc3545'
    },
  },
});

export default theme;
