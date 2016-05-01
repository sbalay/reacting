import React from 'react';

import style from './hello.scss';  // eslint-disable-line no-unused-vars

export default class Hello2 extends React.Component {

  componentDidMount() {
    console.log('DID MOUNT 2');
    console.log('DID MOUNT 2');
    console.log('DID MOUNT 2');
    console.log('DID MOUNT 2');
  }

  render() {
    return <h1>Hello2Hello2Hello2Hello2!</h1>;
  }
}
