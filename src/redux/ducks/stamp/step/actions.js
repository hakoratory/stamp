import { createAction } from '@reduxjs/toolkit'

export const back = createAction('stamp/step/back')
export const next = createAction('stamp/step/next')
export const set = createAction('stamp/step/set')