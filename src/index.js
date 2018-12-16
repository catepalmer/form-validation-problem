import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {createStore, compose} from 'redux'

import reducer from './form/form.reducer'
import App from './app/app.component'

const store = createStore(reducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
))

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})


