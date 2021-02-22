import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router } from 'react-router-dom'
import * as urls from './static/constants/url'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<p>loading...</p>} persistor={persistor}>
            <Router basename={urls.BASE_NAME}>
                <App />
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)