import React, { Fragment, useEffect, useState } from 'react'
import './static/css/App.css'
import clsx from 'clsx';
import Header from './header/Header'
import { Container, makeStyles, Box } from '@material-ui/core'
import Palette from './palette/Palette'
import Canvas from './canvas/Canvas'
import CustomButton from './palette/button/CustomButton'
import {
    add,
    reset,
    back,
} from './redux/ducks/stamp/list/slice'
import {
    changeWidth,
    changeHeight,
    changeBorderRadius,
    changeOpacity,
    changeBackgroundColor,
} from './redux/ducks/stamp/conf/slice'
import { modal } from './redux/ducks/modal/slice'
import { useDispatch, useSelector } from 'react-redux'
import * as selectors from './redux/rootSelectors'
import PersistentDrawerBottom from './drawer/PersistentDrawerBottom'
import IconButton from '@material-ui/core/IconButton'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

export const useStyles = makeStyles((theme) => ({
    canvas: {
        border: "2px solid #808080",
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: window.innerHeight - 70 - 120
        //height: "75vh",
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
    const currentConf = useSelector(selectors.confSelectors.selectConf)

    const handleChange_width = (event, newValue) => {
        dispatch(changeWidth({value: newValue}))
    }

    const handleChange_height = (event, newValue) => {
        dispatch(changeHeight({value: newValue}))
    }

    const handleChange_borderRadius = (event, newValue) => {
        dispatch(changeBorderRadius({value: newValue}))
    }

    const handleChange_opacity = (event, newValue) => {
        dispatch(changeOpacity({value: newValue}))
    }

    const handleChange_backgroundColor = (event, newValue) => {
        dispatch(changeBackgroundColor({value: newValue}))
    }

    const handleClick_canvas = (event) => {
        dispatch(add({x: event.pageX, y: event.pageY, currentConf: currentConf}))
    }

    const handleClick_button = (event, id) => {
        switch(id){
            case "RESET":
                dispatch(reset())
                break
            case "BACK":
                dispatch(back())
                break
            default:
        }
    }

    const handleClick_modal = () => {
        dispatch(modal())
    }

    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        const onResize = () => {
            return setHeight(window.innerHeight)
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [height])

    const classes = useStyles()

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return(
        <Fragment>
            <Container maxWidth="xl" className={clsx(classes.content, {[classes.contentShift]: open})}>
                <Header onClick={handleClick_modal}/>
                <Canvas onClick={handleClick_canvas} height={height}/>
                <Box display="flex" flexDirection="row">
                    <CustomButton id="RESET" onClick={(event, id) => handleClick_button(event, id)}/>
                    <CustomButton id="BACK" onClick={(event, id) => handleClick_button(event, id)}/>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <IconButton  onClick={handleDrawerOpen}>
                        <ExpandLessIcon fontSize="large"/>
                    </IconButton>
                </Box>
            </Container>
            {/* ドロワーに、ブレークポイントごとの高さを渡す lg md sm xs */}
            <PersistentDrawerBottom
                mdHeight={65 + 350}
                smHeight={65 + 175}
                xsHeight={65 + 175 + 185}
                open={open}
                onOpen={handleDrawerOpen}
                onClose={handleDrawerClose}>
                <Palette
                    className="margin-top-important"
                    onChange_width={(event, newValue) => handleChange_width(event,newValue)}
                    onChange_height={(event, newValue) => handleChange_height(event,newValue)}
                    onChange_borderRadius={(event, newValue) => handleChange_borderRadius(event,newValue)}
                    onChange_opacity={(event, newValue) => handleChange_opacity(event,newValue)}
                    onChange_backgroundColor={(event, newValue) => handleChange_backgroundColor(event,newValue)}
                    onClick={handleClick_button}
                    />
            </PersistentDrawerBottom>
        </Fragment>
    )
}

export default App