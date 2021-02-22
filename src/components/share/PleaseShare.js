import React, { useEffect, useState } from 'react'
import { Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';

const PleaseShare = () => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOpen(true)
    },[])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      }

    return (
        <Snackbar
            autoHideDuration={4000}
            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            open={open}
            onClose={handleClose}
            >
            <Alert onClose={handleClose} severity="info">
            Thank you for using!
            <br/>
            Please share your screenshot!
            </Alert>
        </Snackbar>
    )
}

export default PleaseShare