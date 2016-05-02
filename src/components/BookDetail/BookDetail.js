import React, { Component } from 'react';

export default class BookDetail extends Component {
  render() {
    return (
      <div>{ this.props.book.title }</div>
    );
  }
}

BookDetail.propTypes = {
  book: React.PropTypes.object.isRequired
};
