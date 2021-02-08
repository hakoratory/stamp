import React, { Fragment } from 'react'
import './static/css/App.css'
import { Route } from 'react-router-dom'
import * as urls from './static/constants/url'
import { Box } from '@material-ui/core'
import Header from './components/header/Header'
import Stamp from './components/stamp/Stamp'
import About from './components/header/About'
import Share from './components/share/Share'

function App(){
    return(
        <Fragment>
            <Box mb={0.5}>
                <Header />
            </Box>
            <Route exact path={urls.STAMP}>
                <Stamp />
            </Route>
            <Route path={urls.GALLERY}>
                Coming soon.
            </Route>
            <Route path={urls.ABOUT}>
                <About />
            </Route>
            <Route path={urls.SHARE}>
                <Share />
            </Route>
        </Fragment>
    )
}

export default App