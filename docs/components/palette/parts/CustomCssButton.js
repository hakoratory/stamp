import React from 'react'
import { Box, Button } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            text: {
                fontSize: "0.8rem",
                color: "#4D4D4D",
                fontWeight: "bold",
                borderRadius: 3,
                border: "2px solid #4D4D4D",
                padding: "0 5px",
            },
        },
    },
})

function CustomButton(props){
    return(
        <Box mx={0.1}>
            <ThemeProvider theme={theme}>
                <Button onClick={props.onClick}>
                    {props.children}
                </Button>
            </ThemeProvider>
        </Box>
    )
}

export default CustomButton