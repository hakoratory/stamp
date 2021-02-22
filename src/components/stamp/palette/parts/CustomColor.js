import React, { Fragment } from 'react'
import { CustomPicker, HuePicker } from 'react-color'
import { Hue, Saturation } from 'react-color/lib/components/common'
import { Box, Typography } from '@material-ui/core'

export const CustomColor = ({displayName, color, width, hsl, hsv, onChange}) => {
    const styles = {
        hue: {
            height: 10,
            position: "relative",
            marginBottom: 10
          },
          saturation: {
            width: "100%",
            height: 80,
            position: "relative"
          },
    }

    return (
        <Fragment>
            <Box display="flex" flexDirection="row" alignItems="center">
                <Typography variant="subtitle2">
                    <Box lineHeight={3} pr={1} width="25px" textAlign="center">
                        {displayName}
                    </Box>
                </Typography>
                <Box flexGrow={1} style={styles.hue}>
                    <HuePicker
                        color={color}
                        onChange={onChange}
                        width={width}
                        />
                </Box>
            </Box>
            <Box style={styles.saturation}>
                <Saturation
                    hsl={hsl}
                    hsv={hsv}
                    onChange={onChange}
                    />
            </Box>
        </Fragment>
    )
}

export default CustomPicker(CustomColor)