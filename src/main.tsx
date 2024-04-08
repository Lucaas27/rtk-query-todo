import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { store } from './store/store';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';

const container = document.getElementById('root');

if (container) {
  ReactDOM.createRoot(container).render(
    <Provider store={store}>
      <SnackbarProvider autoHideDuration={5000} maxSnack={2}>
        <App />
      </SnackbarProvider>
    </Provider>
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. \
    Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  );
}
