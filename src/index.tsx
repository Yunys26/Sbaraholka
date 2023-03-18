import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

export default () => <App/>;

export const mount = (Component, element = document.getElementById('src')) => {
  // @ts-ignore
  const root = ReactDOM.createRoot(element);
  root.render(<Component/>);

  if(module.hot) {
    module.hot.accept('./app', ()=> {
      root.render(<Component/>);
    })
  }
};

export const unmount = () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('src'));
};

