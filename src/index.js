// import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React    from 'react';
import routes from './routes/createRoutes'

import AppContainer   from './containers/AppContainer';

ReactDOM.render(
  <AppContainer routes={routes} />, document.getElementById('root')
);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
