import React, { Component } from 'react';

import BooksDashboardFilters from '../BooksDashboardFilters/BooksDashboardFilters';
import BookDetail from '../BookDetail/BookDetail';

export default class BooksDashboard extends Component {

  constructor (props) {
    super(props);
    this.state = {
      books: [
        {
          author: 'qweqwe123123zxczx',
          id: '1',
          imageUrl: 'http://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg',
          title: 'asd123'
        },
        {
          author: 'qweqwe123123zxczx',
          id: '11',
          imageUrl: 'https://pbs.twimg.com/media/ChRabBdU4AA4jw4.jpg',
          title: 'asd123'
        },
        {
          author: 'qweqwe123123zxczx',
          id: '111',
          imageUrl: 'http://sabiaunite.com/uploads/gallery/12112013-080739AM-2.jpg',
          title: 'asd123'
        },
        {
          author: 'qweqwe123123zxczx',
          id: '1111',
          imageUrl: 'https://www.planwallpaper.com/static/images/magic-of-blue-universe-images.jpg',
          title: 'asd123'
        },
        {
          author: 'qweqwe123123zxczx',
          id: '11111',
          imageUrl: 'http://im.rediff.com/news/2016/mar/01smith1.jpg',
          title: 'asd123asd123asd123asd123asd123asd123asd123'
        },
        {
          author: 'qweqwe123123zxczxqweqwe123123zxczxqweqwe123123zxczxqweqwe123123zxczx',
          id: '111111',
          title: 'asd123'
        },
        {
          author: 'qweqwe123123zxczx',
          id: '1111111',
          imageUrl: 'https://pbs.twimg.com/media/ChOTkRUU8AED4Lp.jpg',
          title: 'asd123'
        },
        {
          author: 'qweqwe123123zxczxqweqwe123123zxczxqweqwe123123zxczx',
          id: '11111111',
          imageUrl: 'http://www.gettyimages.com/landing/assets/static_content/home/info-tabs1.jpg',
          title: 'asd123asd123asd123asd123'
        }
      ]
    };
  }

  render() {
    return (
      <div className='wb-books-dashboard'>
        <BooksDashboardFilters />
        <ul className="wb-books-container">
          {
            this.state.books.map((bookParams) => {
              return <li key={ bookParams.id }><BookDetail book={ bookParams }/></li>;
            })
          }
        </ul>
      </div>
    );
  }
}
