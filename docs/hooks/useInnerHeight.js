import React, { useState, useEffect } from 'react'

export const useInnerHeight = () => {
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        const onResize = () => {
            return setHeight(window.innerHeight)
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [height])
    
    return height
}