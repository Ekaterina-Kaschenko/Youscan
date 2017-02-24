// import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React    from 'react';
import {Router, Route, browserHistory} from 'react-router';

import App   from './containers/App';
import FilmDetails  from './containers/FilmDetailsContainer';

import './index.html';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route path='/details/:id' component={FilmDetails } />
  </Router>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
