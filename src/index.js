import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './router';
import { SnackbarProvider } from 'notistack';

// add action to all snackbars
const notistackRef = React.createRef();
const onClickDismiss = key => () => {
  notistackRef.current.closeSnackbar(key);
};

ReactDOM.render(
  <SnackbarProvider
    preventDuplicate
    maxSnack={1}
    ref={notistackRef}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    action={key => (
      <button
        className="btn"
        style={{ color: 'white' }}
        onClick={onClickDismiss(key)}
      >
        Dismiss
      </button>
    )}
  >
    <AppRoutes />
  </SnackbarProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
