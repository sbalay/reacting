import style from "./style.css";
import Hello from './component.jsx';

import React from 'react';

main();

function main() {
    React.render(<Hello />, document.getElementById('app'));
}
