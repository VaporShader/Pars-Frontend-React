import React from 'react';
// eslint-disable-next-lines
import LockScreen from '../components/LockScreen';
// eslint-disable-next-line
import MainPage from '../components/MainPage';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useCookies } from 'react-cookie';

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  let CheckForCookies = null;
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  // eslint-disable-next-line
  const [user, setUser, removeUser] = useCookies(['user']);
  if (user.username === undefined || user.password === undefined) CheckForCookies = <LockScreen />
  else CheckForCookies = <MainPage />
  return (
    <ThemeProvider theme={theme}>
      {CheckForCookies}
    </ThemeProvider>
  );
}
