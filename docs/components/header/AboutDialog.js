import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector } from 'react-redux'
import * as selectors from '../../redux/rootSelectors'
import { Typography } from '@material-ui/core';

function AboutDialog(props){
    const modal = useSelector(selectors.modalSelectors.selectOpen)
    return(
        <Dialog
            open={modal}
            onClose={props.onClick}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"About"}</DialogTitle>
            <DialogContent>
                <Typography variant="body2" id="alert-dialog-description" gutterBottom>
                    A tool for drawing pictures by stamping various shapes in the frame.
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    Version
                </Typography>
                <Typography variant="body2" gutterBottom>
                    1.11
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    How to stamp
                </Typography>
                <Typography variant="body2" gutterBottom>
                    1. Determine the size of the frame (window size).
                    <br/>
                    2. Use the sliders to change the size, shape, opacity, and color of the stamp.
                    <br/>
                    3. Let's stamp!
                    <br/>
                    4. Pressing the RESET button initializes the stamps you have pressed, the slider positions, and the stamp preview.
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    About the use of source code
                </Typography>
                <Typography variant="body2" gutterBottom>
                    You can use it freely if you use it for personal use. Please let me know if you created any work using this code.
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    Thanks
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Part of this code was created with reference to the following book.
                    <br></br>
                    <a href="https://www.shuwasystem.co.jp/book/9784798056920.html">React.js & Next.js超入門</a>
                </Typography>
            </DialogContent>
            <DialogActions>
            <Button onClick={props.onClick} color="primary" autoFocus>
                CLOSE
            </Button>
            </DialogActions>
        </Dialog>
    )
}
export default AboutDialog