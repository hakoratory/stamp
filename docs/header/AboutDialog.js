import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector } from 'react-redux'
import * as selectors from '../redux/rootSelectors'

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
                <DialogContentText id="alert-dialog-description">
                A tool for drawing pictures by stamping various shapes in the frame.
                <br/>
                <br/>
                Version
                <br/>
                1.7
                <br/>
                <br/>
                How to stamp
                <br/>
                1. Determine the size of the frame (window size)<sup>[*1]</sup>.
                <br/>
                2. Use the sliders to change the size, shape, opacity, and color of the stamp.
                <br/>
                3. Let's stamp!
                <br/>
                4. Pressing the RESET button initializes the stamps you have pressed, the slider positions, and the stamp preview.
                <br/>
                <br/>
                In the future
                <br/>
                ・Add a function to post images you created with stamps to SNS.
                <br/>
                <br/>
                About the use of source code
                <br/>
                You can use it freely if you use it for personal use. Please let me know if you created any work using this code.
                <br/>
                <br/>
                Thanks
                <br/>
                Part of this code was created with reference to the following book.
                <br/>
                <br/>
                <a href="https://www.shuwasystem.co.jp/book/9784798056920.html">React.js & Next.js超入門</a>
                <br/>
                <br/>
                notes
                <br/>
                1. If you resize the window after pressing some stamps, these you was pressed will retain its position.

            </DialogContentText>
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