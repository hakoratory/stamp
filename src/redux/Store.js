import { createStore } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const ADD = "ADD"
const CHANGE = "CHANGE"

let number = 0
let conf = {
    width: {
        id: "width",
        value: 50,
        step: 1,
        max: 500,
    },
    height: {
        id: "height",
        value: 50,
        step: 1,
        max: 500,
    },
    borderRadius: {
        id: "border radius",
        value: 10,
        step: 1,
        max: 500,
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

let preview = getPreview(conf)

let initialState = {
    list: [],
    conf: conf,
    preview: preview,
}

export function reducer(state = initialState, action){
    switch(action.type){
        case ADD:
            return addReduce(state, action)
        case CHANGE:
            return changeReduce(state, action)
        default:
            return state

    }
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

function addReduce(state, action){

    let newData = {
        x: action.event.pageX,
        y: action.event.pageY,
        number: number++,
        width: state.conf.width.value,
        height: state.conf.height.value,
        borderRadius: state.conf.borderRadius.value,
        opacity: state.conf.opacity.value,
        backgroundColor: state.conf.backgroundColor.value
    }
    
    let newList = state.list.slice()
    newList.push(newData)
    return {
        list: newList,
        conf: state.conf,
        preview: state.preview,
    }
}

function changeReduce(state, action){
    let newConf = {...state.conf}
    switch(action.event.target.id){
        case state.conf.width.id:
            newConf.width.value = action.value
            break
        case state.conf.height.id:
            newConf.height.value = action.value
            break
        case state.conf.borderRadius.id:
            newConf.borderRadius.value = action.value
            break
        case state.conf.opacity.id:
            newConf.opacity.value = action.value
            break
        case state.conf.backgroundColor.id:
            newConf.backgroundColor.value = action.value
            break
        default:

    }

    let newPreview = {...getPreview(newConf)}

    return {
        list: state.list,
        conf: newConf,
        preview: newPreview,
    }
}

export function change(event, newValue){
    return {
        type: CHANGE,
        event: event,
        value: newValue,
    }
}

export function add(event){
    return {
        type: ADD,
        event: event,
    }
}

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