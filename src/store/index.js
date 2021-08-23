import { useMemo } from 'react'
import { configureStore } from '@reduxjs/toolkit'

import configSlice from './config/slice'
import productSlice from './product/slice'
import trlSlice from './trl/slice'
import uiSlice from './ui/slice'

let store

const createStore = (preloadedState) => {
  return configureStore({
    reducer: {
      config: configSlice.reducer,
      product: productSlice.reducer,
      trl: trlSlice.reducer,
      ui: uiSlice.reducer,
    },
    preloadedState,
  })
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? createStore(preloadedState)

  if (preloadedState && store) {
    _store = createStore({ ...store.getState(), ...preloadedState })
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
