import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { amber300, red100, red500, red700} from 'material-ui/styles/colors';
import Layout from '../../components/Layout';
import styles from './styles.css';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red500,
    primary2Color: red700,
    primary3Color: red100,
    accent1Color: amber300,
    pickerHeaderColor: red500,
  },
});
const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Layout />
  </MuiThemeProvider>
);

export default App;
