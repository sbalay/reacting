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
          imageUrl: `https://images.contentful.com/256tjdsmm689/2T0QeKcvR6MSsckuKoYIwS/
                     b57d12107fc5eb635e294ed1c76cbbac/feature-gettyimages.jpg`,
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
          imageUrl: `http://static.ddmcdn.com/gif/storymaker-best-hubble-space
                     telescope-images-20092-514x268.jpg`,
          title: 'asd123'
        },
        {
          author: 'qweqwe123123zxczx',
          id: '111111',
          imageUrl: `http://i.dailymail.co.uk/i/pix/2015/06/26/08/
                     29F51C6A00000578-3139358-image-m-7_1435303227646.jpg`,
          title: 'asd123'
        },
        {
          author: 'qweqwe123123zxczx',
          id: '1111111',
          imageUrl: 'https://www.planwallpaper.com/static/images/Frozen-Logo-Symbol-HD-Images.jpg',
          title: 'asd123'
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
