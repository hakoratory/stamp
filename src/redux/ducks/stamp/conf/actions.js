import { createAction } from '@reduxjs/toolkit'

export const changeWidth = createAction('stamp/conf/changeWith')
export const changeHeight = createAction('stamp/conf/changeHeight')
export const changeBorderRadius = createAction('stamp/conf/changeBorderRadius')
export const changeRotate = createAction('stamp/conf/changeRotate')
export const changeOpacity = createAction('stamp/conf/changeOpacity')
export const changeBackgroundColor = createAction('stamp/conf/changeBackgroundColor')
export const reset = createAction('stamp/con/reset')