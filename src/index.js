import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import App from './containers/con_App';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
const store = createStore(reducers)

ReactDOM.render(
<Provider store={store}>
    <App loginUser="false"/>
  </Provider>,
document.getElementById('root'));
registerServiceWorker();