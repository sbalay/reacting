import React, { Component } from 'react';

export default class BookDetail extends Component {
  render() {
    return (
      <div className='wb-book-details-container'>
        {
          this.props.book.imageUrl
            ? <img className='wb-book-cover' src={ this.props.book.imageUrl } alt=""/>
            : <div className='wb-book-cover-default'><img alt=""/></div>
        }
        <div className='wb-book-attrs'>
          <strong>{ this.props.book.title }</strong>
          <span>{ this.props.book.author }</span>
        </div>
      </div>
    );
  }
}

BookDetail.propTypes = {
  book: React.PropTypes.object.isRequired
};
