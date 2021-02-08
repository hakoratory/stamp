import { makeStyles } from '@material-ui/core'
import { useSelector } from 'react-redux'
import * as selectors from '../redux/rootSelectors'
import { useInnerHeight } from './useInnerHeight'

const useStyles = makeStyles(theme => ({
    common: {
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: arg => (arg.innerHeight * 0.95) - arg.headerHeight - arg.footerHeight - 30 /* the height of swipeable switch */,
        margin: "auto",
    },
    shape: {
        outline: "2px solid #808080",
        backgroundColor: "#FFFFFF",
    },
    shape_dummy: {
        //width: "50% !important",
        zIndex: 1,
    },
    hidden: {
        display: "none",
    }
}))

export const useFrameStyles = () => {
    const innerHeight = useInnerHeight()
    const headerRect = useSelector(selectors.clientRectSelectors.selectHeaderRect)
    const footerRect = useSelector(selectors.clientRectSelectors.selectFooterRect)

    const classes = useStyles({
        innerHeight: innerHeight,
        headerHeight: headerRect.height,
        footerHeight: footerRect.height,
    })

    return classes
}