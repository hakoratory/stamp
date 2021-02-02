import { makeStyles } from '@material-ui/core'

export const useStampStyles = makeStyles((theme) => ({
    header: {
        height: "40px",
    },
    frame_common: {
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: arg => (arg.innerHeight * 0.95) - arg.headerHeight - arg.footerHeight,
        margin: "auto",
    },
    frame_shape: {
        outline: "2px solid #808080",
        backgroundColor: "#FFFFFF",
    },
    frame_shape_dummy: {
        //width: "50% !important",
        zIndex: 1,
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
}))
