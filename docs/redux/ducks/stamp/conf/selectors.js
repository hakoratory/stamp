import { getPreview } from '../../../utils'

export const selectConf = state => state.stamp.conf

export const selectConfAsPreview = state => getPreview(state.stamp.conf)