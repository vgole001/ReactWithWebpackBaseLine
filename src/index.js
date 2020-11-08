import React from 'react';
import ReactDOM from 'react-dom';

import {Foo} from './App';

const title1 = 'My Minimal React Webpack Babel Setup';
const title2 = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <Foo title='Hello Darkness!' />,
  document.getElementById('app')
);

module.hot.accept();
