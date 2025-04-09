import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from "react-redux";
import { store } from './features/authStore';
import { GoogleOAuthProvider } from '@react-oauth/google'; 
const CLIENT_ID="566129138270-k7ucp64j5a7i5gee4m0s2ai1kogqf0kd.apps.googleusercontent.com"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <ToastContainer />
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </Provider>
)