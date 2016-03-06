import style from './style.css';  // eslint-disable-line
import Hello from './component.jsx';

import React from 'react';
import ReactDOM from 'react-dom';

function main() {
  ReactDOM.render(<Hello />, document.getElementById('app'));
}

main();
