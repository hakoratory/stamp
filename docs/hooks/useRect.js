import { useState } from 'react'

export const useRect = (argWidth, argHeight) => {
    const [rect, setRect] = useState({width: argWidth, height: argHeight})

    const setArgToRect = (width, height) => {
        setRect({
            width: width,
            height: height,
        })
    }
    return [rect, setArgToRect]
}