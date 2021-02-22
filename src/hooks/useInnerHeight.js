import React, { useState, useEffect } from 'react'

export const useInnerHeight = () => {
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        const onResize = () => {
            return setHeight(window.innerHeight)
        }
        window.addEventListener('resize', onResize, {passive: true})
        return () => window.removeEventListener('resize', onResize, {passive: true})
    }, [height])
    
    return height
}