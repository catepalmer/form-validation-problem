import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {createStore, compose} from 'redux'

import reducer from './form/form.reducer'
import App from './app/app.component'
// import * as serviceWorker from './serviceWorker'

const store = createStore(reducer, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('app')
// )

// serviceWorker.unregister()



document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
