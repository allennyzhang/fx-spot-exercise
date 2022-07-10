import { configureStore } from '@reduxjs/toolkit'
import spotReducer from './spotSlice'

export const store = configureStore({
    reducer: {
        spot: spotReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch