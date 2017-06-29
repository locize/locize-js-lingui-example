This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and ejected.

Then we added [js-lingui](https://github.com/lingui/js-lingui/tree/master/packages/lingui-react) like documented.

## integrate [locize.com](http://locize.com)

Finally the [locizer](https://github.com/locize/locizer) script was added to connect with locize.

Just change your index.js:

**Before:**

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { I18nProvider } from 'lingui-react'

import messages from './locales/en.json'

ReactDOM.render(
  <I18nProvider language="en" messages={{ en: messages }}>
    <App />
  </I18nProvider>
, document.getElementById('root'));
registerServiceWorker();
```

**After:**

```js
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
  projectId: '[your project id]'
}).load('translations', function(err, translations, lng) {
  ReactDOM.render(
    <I18nProvider language={lng} messages={{ [lng]: translations }}>
      <App />
    </I18nProvider>
  , document.getElementById('root'));
  registerServiceWorker();
});
```

Translations will be loaded and correct user language will be detected. For all the options go [here](https://github.com/locize/locizer).
