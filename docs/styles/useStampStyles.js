import { makeStyles } from '@material-ui/core'

console.log('stamp styles')
export const useStampStyles = makeStyles((theme) => ({
    header: {
        height: "40px",
    },
    frame: {
        border: "2px solid #808080",
        backgroundColor: "#FFFFFF",
        width: "95%",
        height: arg => (arg.innerHeight * 0.95) - arg.headerHeight - arg.footerHeight,
        margin: "auto",
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
