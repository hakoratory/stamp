import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { Typography, Slider, Box, Tooltip } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { isIOS } from 'react-device-detect'

const iOSBoxShadow =
'0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

export const IOSSlider = withStyles({
  root: {
    color: '#3880ff',
    height: 2,
    padding: '10px 0',
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    marginTop: -10,
    marginLeft: -10,
    '&:focus, &:hover, &:active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#808080',
  },
})(Slider);

const width = {
    width: "70px"
}

function CustomSlider(props){
    return(
      <Box display="flex" flexDirection="row" alignItems="center" height="30px">
            <Typography variant="subtitle2">
                <Box lineHeight={1} pr={1} width="25px" textAlign="center">
                    {props.displayName}
                </Box>
            </Typography>
            <Box flexGrow={2} pt={1}>
              {isIOS
                ? <IOSSlider 
                    id={props.id}
                    step={props.step}
                    min={props.min}
                    max={props.max}
                    onChange={props.onChange}
                    value={props.value}
                    valueLabelDisplay="auto"
                    />
                : <Slider
                    id={props.id}
                    step={props.step}
                    min={props.min}
                    max={props.max}
                    onChange={props.onChange}
                    value={props.value}
                    valueLabelDisplay="auto"
                    />
              }
          </Box>
          {/* <Box>
              <Typography variant="subtitle2">
                  <Box textAlign="right" style={width}>
                      {props.value}/{props.max}
                  </Box>
              </Typography>
          </Box> */}
        </Box>
    )
}

export default CustomSlider