import React, { useEffect } from 'react'
import { Box } from '@material-ui/core'
import { useClientRect } from '../../../hooks/useClientRect'
import { initFooter } from '../../../redux/ducks/client-rect/slice'
import { useDispatch } from 'react-redux'

export default function Footer(props){
    const dispatch = useDispatch()

    const [rect, ref] = useClientRect()
    useEffect(() => {
        if(rect !== null){
            dispatch(initFooter({width: rect.width, height: rect.height}))
        }
    },[rect])

    return (
        <Box ref={ref}>
            <Box display="flex" flexDirection="row" alignItems="flex-start">
                <Box display="flex" flexWrap="wrap" flexGrow={1} m={1} justifyContent="center">
                    {props.children}
                </Box>
            </Box>
        </Box>
    )
}