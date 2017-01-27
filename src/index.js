// import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React    from 'react';
import {Router, Route, hashHistory} from 'react-router';

import App   from './containers/App';
import FilmDetails  from './components/FilmDetails';

// import store from './store';

import './index.html';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/details' component={FilmDetails} />
    </Route>
  </Router>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
