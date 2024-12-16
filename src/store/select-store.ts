import {createStore,createEvent} from 'effector'

export const setSelectedPage=createEvent<number>()

export const $selectedPage=createStore(1).on(setSelectedPage,(_,value)=>value)