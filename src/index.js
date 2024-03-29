import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TradesContextProvider } from './context/TradeContext';
import { AuthContextProvider } from './context/AuthContext';

import './fonts/roboto-v30-latin-300.woff';
import './fonts/roboto-v30-latin-300.woff2';
import './fonts/roboto-v30-latin-regular.woff';
import './fonts/roboto-v30-latin-regular.woff2';
import './fonts/roboto-v30-latin-500.woff2';
import './fonts/roboto-v30-latin-500.woff';
import './fonts/roboto-v30-latin-700.woff2';
import './fonts/roboto-v30-latin-700.woff';

// import i18n (needs to be bundled ;))
import instance1 from './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <React.StrictMode>
                <I18nextProvider i18n={instance1}>
                        <AuthContextProvider>
                                <TradesContextProvider>
                                        <App />
                                </TradesContextProvider>
                        </AuthContextProvider>
                </I18nextProvider>
        </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
