import React, { Fragment, useState } from 'react'
import './static/css/App.css'
import clsx from 'clsx';
import Header from './header/Header'
import { Container, makeStyles, Box } from '@material-ui/core'
import Palette from './palette/Palette'
import Canvas from './canvas/Canvas'
import CustomButton from './palette/button/CustomButton'
import { modal } from './redux/ducks/modal/slice'
import { useDispatch } from 'react-redux'
import PersistentDrawerBottom from './drawer/PersistentDrawerBottom'
import IconButton from '@material-ui/core/IconButton'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import { reset } from './redux/ducks/stamp/stampSlice'
import { back, next, set } from './redux/ducks/stamp/step/actions'

export const useStyles = makeStyles((theme) => ({
    //TODO move to each components
    canvas: {
        border: "2px solid #808080",
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: window.innerHeight - 70 - 120
    },
    canvas_frame: {
        
    },
    preview: {
        [theme.breakpoints.up('md')]: {
            width: "320px",
            height: "320px",
        },
        [theme.breakpoints.down('sm')]: {
            width: "170px",
            height: "170px",
        },
    },
    content: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        [theme.breakpoints.up('md')]: {
            marginBottom: -(65 + 350),
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: -(65 + 175),
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: -(65 + 175 + 185),
        },
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginBottom: 0,
    },
}))


function App(){
    const dispatch = useDispatch()

    // move to Header component
    const handleClick_modal = () => {
        dispatch(modal())
    }

    const classes = useStyles()

    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    // create new component
    const handleClick_button = (event, id) => {
        switch(id){
            case "RESET":
                dispatch(reset())
                break
            case "PREV":
                dispatch(back())
                break
            case "NEXT":
                dispatch(next())
                break
            default:
        }
    }

    return(
        <Fragment>
            <Container maxWidth="xl" className={clsx(classes.content, {[classes.contentShift]: open})}>
                <Header onClick={handleClick_modal}/>
                <Canvas />
                <Box display="flex" flexDirection="row">
                    <CustomButton id="RESET" onClick={(event, id) => handleClick_button(event, id)}/>
                    <CustomButton id="PREV" onClick={(event, id) => handleClick_button(event, id)}/>
                    <CustomButton id="NEXT" onClick={(event, id) => handleClick_button(event, id)}/>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <IconButton  onClick={handleDrawerOpen}>
                        <ExpandLessIcon fontSize="large"/>
                    </IconButton>
                </Box>
            </Container>
            {/* ドロワーに、ブレークポイントごとの高さを渡す md sm xs */}
            <PersistentDrawerBottom
                mdHeight={65 + 350}
                smHeight={65 + 175}
                xsHeight={65 + 175 + 185}
                open={open}
                onOpen={handleDrawerOpen}
                onClose={handleDrawerClose}>
                <Palette className="margin-top-important"/>
            </PersistentDrawerBottom>
        </Fragment>
    )
}

export default App