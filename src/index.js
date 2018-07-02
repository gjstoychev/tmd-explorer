import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Route, Router, Switch} from 'react-router'

import createBrowserHistory from './history'

import configureStore from './store/configureStore'

import PopularContainer from './containers/PopularContainer'
import MovieContainer from './containers/MovieContainer'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './index.css'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory}>
      <Switch>
        <Route exact path='/' component={PopularContainer} />
        <Route path='/movie/:title' component={MovieContainer} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)