import * as React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import {AuthContextProvider}  from '../context/AuthContext';
import {TradesContextProvider} from '../context/TradeContext';
import {I18nextProvider} from 'react-i18next'
// Mock
import i18n from '../react-i18next';

jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
      return {
        t: (str) => str,
        i18n: {
          changeLanguage: () => new Promise(() => {}),
        },
      };
    },
  }));
  
describe('App', () => {    
    it('renders App component', () => {
      render(<AuthContextProvider><TradesContextProvider><I18nextProvider i18n={i18n}><App /></I18nextProvider></TradesContextProvider></AuthContextProvider>);
      });
  });





