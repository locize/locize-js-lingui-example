import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { I18nProvider } from 'lingui-react'
import locizer from 'locizer';

locizer.init({
  fallbackLng: 'en',
  referenceLng: 'en',
  projectId: '3b416aae-a591-4c07-828e-fcbfff7f3bff'
}).load('translations', function(err, translations, lng) {
  ReactDOM.render(
    <I18nProvider language={lng} messages={{ [lng]: translations }}>
      <App />
    </I18nProvider>
  , document.getElementById('root'));
  registerServiceWorker();
});
