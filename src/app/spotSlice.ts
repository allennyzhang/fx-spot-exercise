
import {
    createSlice, PayloadAction,
} from '@reduxjs/toolkit'

export interface ICcyPrice {
    ask: number,
    bid: number
}

export interface IPrice {
    [index: string]: ICcyPrice
}

export interface ICcyPair {
    ccy1: string;
    ccy2: string;
}

export interface IState {
    amount: string;
    buySell: string;
    ccyPair: ICcyPair | undefined;
    investmentCcy: string | undefined,
    price: IPrice,
    confirmation: string
}

export const initialState: IState = {
    amount: '1000',
    buySell: 'BUY',
    ccyPair: { ccy1: 'EUR', ccy2: 'USD' },
    investmentCcy: 'EUR',
    price: {},
    confirmation: ''
}

const spotSlice = createSlice({
    name: 'spot',
    initialState,
    reducers: {
        updateAmount(state: IState, action: PayloadAction<string>) {
            state.amount = action.payload
        },
        updateDirection(state: IState, action: PayloadAction<string>) {
            state.buySell = action.payload
        },
        updateCcyPair(state: IState, action: PayloadAction<ICcyPair | undefined>) {
            state.ccyPair = action.payload
        },
        updateCurrency(state: IState, action: PayloadAction<string | undefined>) {
            state.investmentCcy = action.payload
        },
        updatePrice(state: IState, action: PayloadAction<IPrice>) {
            state.price = action.payload
        },
        updateConfirmation(state: IState, action: PayloadAction<string>) {
            state.confirmation = action.payload
        },
    },
})

export const {
    updatePrice,
    updateCcyPair,
    updateDirection,
    updateCurrency,
    updateAmount,
    updateConfirmation
} = spotSlice.actions
export default spotSlice.reducer