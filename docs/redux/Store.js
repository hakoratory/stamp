import { createStore } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const ADD = "ADD"
const CHANGE_WIDTH = "CHANGE_WIDTH"
const CHANGE_HEIGHT = "CHANGE_HEIGHT"
const CHANGE_BORDER_RADIUS = "CHANGE_BORDER_RADIUS"
const CHANGE_OPACITY = "CHANGE_OPACITY"
const CHANGE_BACKGROUND_COLOR = "CHANGE_BACKGROUND_COLOR"
const RESET = "RESET"
const MODAL = "MODAL"

let conf = {
    width: {
        id: "width",
        value: 50,
        step: 1,
        max: 300,
    },
    height: {
        id: "height",
        value: 50,
        step: 1,
        max: 300,
    },
    borderRadius: {
        id: "border radius",
        value: 10,
        step: 1,
        max: 150,
    },
    opacity: {
        id: "opacity",
        value: 0.1,
        step: 0.1,
        max: 1,
    },
    backgroundColor: {
        id: "background color",
        value: "#ff8300",
        width: "100%"
    },
}

//state
let initialState = {
    list: [],
    conf: conf,
    preview: getPreview(conf),
    open: false,
}

export function getPreview(conf){
    return {
        width: conf.width.value + "px",
        height: conf.height.value + "px",
        borderRadius: conf.borderRadius.value + "px",
        opacity: conf.opacity.value,
        backgroundColor: conf.backgroundColor.value,
    }
}

//reducer
export function reducer(state = initialState, action){
    switch(action.type){
        case ADD:
            return addReduce(state, action)
        case CHANGE_WIDTH:
            return changeWidthReduce(state, action)
        case CHANGE_HEIGHT:
            return changeHeightReduce(state, action)
        case CHANGE_BORDER_RADIUS:
            return changeBorderRadiusReduce(state, action)
        case CHANGE_OPACITY:
            return changeOpacityReduce(state, action)
        case CHANGE_BACKGROUND_COLOR:
            return changeBackgroundColorReduce(state, action)
        case RESET:
            return resetReduce()
        case MODAL:
            return modalReduce(state)
        default:
            return state

    }
}

//actions
function addReduce(state, action){
    let newList = state.list.slice()
    let newData = {
        x: action.event.pageX,
        y: action.event.pageY,
        number: newList.length,
        width: state.conf.width.value,
        height: state.conf.height.value,
        borderRadius: state.conf.borderRadius.value,
        opacity: state.conf.opacity.value,
        backgroundColor: state.conf.backgroundColor.value
    }
    newList.push(newData)
    return {
        list: newList,
        conf: state.conf,
        preview: state.preview,
        open: state.open,
    }
}

function changeWidthReduce(state, action){
    let newConf = {...state.conf}
    newConf.width.value = action.value

    let newPreview = {...getPreview(newConf)}

    return {
        list: state.list,
        conf: newConf,
        preview: newPreview,
        open: state.open,
    }
}

function changeHeightReduce(state, action){
    let newConf = {...state.conf}
    newConf.height.value = action.value

    let newPreview = {...getPreview(newConf)}

    return {
        list: state.list,
        conf: newConf,
        preview: newPreview,
        open: state.open,
    }
}

function changeBorderRadiusReduce(state, action){
    let newConf = {...state.conf}
    newConf.borderRadius.value = action.value

    let newPreview = {...getPreview(newConf)}

    return {
        list: state.list,
        conf: newConf,
        preview: newPreview,
        open: state.open,
    }
}

function changeOpacityReduce(state, action){
    let newConf = {...state.conf}
    newConf.opacity.value = action.value

    let newPreview = {...getPreview(newConf)}

    return {
        list: state.list,
        conf: newConf,
        preview: newPreview,
        open: state.open,
    }
}

function changeBackgroundColorReduce(state, action){
    let newConf = {...state.conf}
    newConf.backgroundColor.value = action.value

    let newPreview = {...getPreview(newConf)}

    return {
        list: state.list,
        conf: newConf,
        preview: newPreview,
        open: state.open,
    }
}

function resetReduce(){
    let data = []
    return {
        list: data,
        conf: conf,
        preview: getPreview(conf),
        open: false,
    }
}

function modalReduce(state){
    return {
        list: state.list,
        conf: state.conf,
        preview: state.preview,
        open: !state.open,
    }
}

//action creators
export function add(event){
    return {
        type: ADD,
        event: event,
    }
}

export function changeWidth(event, newValue){
    return {
        type: CHANGE_WIDTH,
        event: event,
        value: newValue,
    }
}

export function changeHeight(event, newValue){
    return {
        type: CHANGE_HEIGHT,
        event: event,
        value: newValue,
    }
}
export function changeBorderRadius(event, newValue){
    return {
        type: CHANGE_BORDER_RADIUS,
        event: event,
        value: newValue,
    }
}
export function changeOpacity(event, newValue){
    return {
        type: CHANGE_OPACITY,
        event: event,
        value: newValue,
    }
}
export function changeBackgroundColor(event, newValue){
    return {
        type: CHANGE_BACKGROUND_COLOR,
        event: event,
        value: newValue,
    }
}
export function reset(){
    return {
        type: RESET,
    }
}

export function modal(){
    return {
        type: MODAL,
    }
}

//redux persist
const persistConfig = {
    key: 'stamp-artist',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export let store = createStore(persistedReducer)
export let persistor = persistStore(store)

export function purge(){
    persistor.purge()
}

export function pause(){
    persistor.pause()
}

export function flush(){
    persistor.flush()
}

export function persist(){
    persistor.persist()
}