import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import BooksDashboard from '../components/BooksDashboard/BooksDashboard';
import App from '../components/App/App';

export default (
  <Router history={ hashHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ BooksDashboard } />
    </Route>
  </Router>
)
