import React from 'react';

import Header from '../Header/Header';

export default function App (props) {
  return (
    <div>
      <Header />
      { props.children }
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
};
