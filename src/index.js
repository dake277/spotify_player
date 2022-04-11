import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { createStore , applyMiddleware } from 'redux'

import registerServiceWorker from './registerServiceWorker'
import reducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()
const middleware = [ sagaMiddleware ]
// middleware.push(createLogger())

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'))
registerServiceWorker()
