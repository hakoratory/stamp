import { makeStyles } from '@material-ui/core'

export const useStampStyles = makeStyles((theme) => ({
    header: {
        height: "40px",
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
