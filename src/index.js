import React from 'react';
import {render}  from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter as Router} from 'react-router-dom';

const rootElement = document.getElementById('root');


const loadScript = (src, done) => {
  const js = document.createElement('script');
  js.src = src;
  js.onload = function () {
    done();
  };
  js.onerror = function () {
    done(new Error('Failed to load script ' + src));
  };
  document.head.appendChild(js);
};

const main = () =>
  render(
      <Router>
        <App />
      </Router>,
    rootElement
  );


  const browserSupportsAllFeatures = () => {
    return (
      window.requestIdleCallback && window.IntersectionObserver
      );
  };

  
  if (browserSupportsAllFeatures()) {
    main();
  } else {
    loadScript(
      'https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=requestIdleCallback%2CIntersectionObserver',
      main
    );
  }


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
