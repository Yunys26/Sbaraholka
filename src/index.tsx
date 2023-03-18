import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

export default () => <App/>;

export const mount = (Сomponent, element = document.getElementById('src')) => {
  const root = ReactDOM.createRoot(element);
  root.render(<Сomponent/>);

  if(module.hot) {
    module.hot.accept('./src', ()=> {
      root.render(<Сomponent/>);
    })
  }
};

export const unmount = () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('src'));
};

