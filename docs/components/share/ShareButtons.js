import React, { Fragment } from 'react'
import { Box } from '@material-ui/core'

const ShareButtons = () => {
    return (
        <Fragment>
            <Box mx={1}>
                <a 
                    href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                    className="twitter-share-button"
                    data-show-count="false"
                    data-size="large"
                    data-text="Let's stamp!"
                    data-url="https://hakolab.github.io/stamp/"
                    data-hashtags="hakolab,stamp"
                    >Tweet</a>
            </Box>
        </Fragment>
    )
}

export default ShareButtons