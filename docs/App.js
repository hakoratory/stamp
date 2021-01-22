import React, { Fragment } from 'react'
import './static/css/App.css'
import Header from './header/Header'
import { Container, Drawer, makeStyles, Box } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
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
import { useTheme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    canvas: {
        border: "2px solid #808080",
        backgroundColor: "#FFFFFF",
        width: "95%",
        height: "75vh",
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
    /* hide: {
    display: 'none',
    }, */
    drawer: {
        width: "100%",
        height: "50%",
        flexShrink: 0,
    },
    drawerPaper: {
        width: "100%",
        height: "50%",
        backgroundColor: "#C0C0C0",
        borderTop: "1px solid #000"
    },
    content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    },
    contentShift: {
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
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

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
    setOpen(true);
    };

    const handleDrawerClose = () => {
    setOpen(false);
    };

    return(
        <Fragment>
            <Container maxWidth="xl">
                    <Header onClick={handleClick_modal}/>
                    <Canvas onClick={handleClick_canvas} />
                    <Box display="flex" flexDirection="row">
                        <CustomButton id="RESET" onClick={(event, id) => handleClick_button(event, id)}/>
                        <CustomButton id="BACK" onClick={(event, id) => handleClick_button(event, id)}/>
                    </Box>
            </Container>
            <Box display="flex" alignItems="center" justifyContent="center">
                <IconButton  onClick={handleDrawerOpen}>
                    <ExpandLessIcon fontSize="large"/>
                </IconButton>
            </Box>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="bottom"
                open={open}
                classes={{
                paper: classes.drawerPaper,
                }}
                >
                <Box display="flex" alignItems="center" justifyContent="center">
                    <IconButton onClick={handleDrawerClose}>
                        <ExpandMoreIcon  fontSize="large"/>
                    </IconButton>
                </Box>
                <Palette
                    className="margin-top-important"
                    onChange_width={(event, newValue) => handleChange_width(event,newValue)}
                    onChange_height={(event, newValue) => handleChange_height(event,newValue)}
                    onChange_borderRadius={(event, newValue) => handleChange_borderRadius(event,newValue)}
                    onChange_opacity={(event, newValue) => handleChange_opacity(event,newValue)}
                    onChange_backgroundColor={(event, newValue) => handleChange_backgroundColor(event,newValue)}
                    onClick={handleClick_button}
                    />
            </Drawer>
        </Fragment>
    )
}

export default App