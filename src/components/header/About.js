import React from 'react'
import { Box, Typography } from '@material-ui/core'

export default function About(){
    return (
        <Box p={2}>
            <Typography variant="h4" gutterBottom>
                About Stamp
            </Typography>
            <Typography variant="body1" gutterBottom>
                A tool for drawing pictures by stamping various shapes in the frame.
            </Typography>
            <Typography variant="h4" gutterBottom>
                Version
            </Typography>
            <Typography variant="body1" gutterBottom>
                3.1
            </Typography>
            <Typography variant="h4" gutterBottom>
                How to stamp
            </Typography>
            <Typography variant="body1" gutterBottom>
                1. Determine the size of the frame (window size)<sup id="note_ref-1"><a href="#note-1">[*1]</a></sup>.
                <br/>
                2. Use the sliders to change the size, shape, opacity, and color of the stamp.
                <br/>
                3. Let's stamp!
                <br/>
                4. Pressing the RESET button initializes the stamps you have pressed, the slider positions, and the stamp preview.
            </Typography>
            <Typography variant="h4" gutterBottom>
                In the future
            </Typography>
            <Typography variant="body1" gutterBottom>
                Add a function to post images you created with stamps to SNS.
            </Typography>
            <Typography variant="h4" gutterBottom>
                About the use of source code
            </Typography>
            <Typography variant="body1" gutterBottom>
                You can use it freely if you use it for personal use. Please let me know if you created any work using this code.
            </Typography>
            <Typography variant="h4" gutterBottom>
                Thanks
            </Typography>
            <Typography variant="body1" gutterBottom>
                Part of this code was created with reference to the following book.
                <br></br>
                <a href="https://www.shuwasystem.co.jp/book/9784798056920.html">React.js & Next.js超入門</a>
            </Typography>
            <Typography variant="h4" gutterBottom>
                notes
            </Typography>
            <Typography variant="body1" gutterBottom>
                1. <b><a id="note-1" href="#note_ref-1">^</a></b> If you resize the window after pressing some stamps, these you press will retain its position.
            </Typography>
        </Box>
    )
}