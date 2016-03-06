import style from './style.css';  // eslint-disable-line
import Hello from './component.jsx';

import React from 'react';

function main() {
  React.render(<Hello />, document.getElementById('app'));
}

main();
