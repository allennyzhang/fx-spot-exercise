import reducer, {
    initialState,
    updatePrice,
    updateCcyPair,
    updateDirection,
    updateCurrency,
    updateAmount,
    updateConfirmation
} from '../app/spotSlice';
import { DirectionEnum } from '../utils/enums';

describe('spotSlice', () => {
    test('should return the initial state', () => {
        expect(reducer(undefined, { type: undefined })).toEqual(initialState)
    })

    test('should handle updateAmount reducer', () => {
        let amount = '2000'
        let expected = { ...initialState, amount }
        expect(reducer(initialState, updateAmount(amount))).toEqual(expected)

        amount = '3000'
        expected = { ...initialState, amount }
        expect(reducer(initialState, updateAmount(amount))).toEqual(expected)
    })

    test('should handle updateDirection reducer', () => {
        let direction = DirectionEnum.BUY
        let expected = { ...initialState, buySell: direction }
        expect(reducer(initialState, updateDirection(direction))).toEqual(expected)

        direction = DirectionEnum.BUY
        expected = { ...initialState, buySell: direction }
        expect(reducer(initialState, updateDirection(direction))).toEqual(expected)
    })

    test('should handle updateCcyPair reducer', () => {
        let ccyPair = { ccy1: 'EUR', ccy2: 'USD' }
        let expected = { ...initialState, ccyPair }
        expect(reducer(initialState, updateCcyPair(ccyPair))).toEqual(expected)

        ccyPair = { ccy1: 'USD', ccy2: 'CHF' }
        expected = { ...initialState, ccyPair }
        expect(reducer(initialState, updateCcyPair(ccyPair))).toEqual(expected)
    })

    test('should handle updateCurrency reducer', () => {
        let investmentCcy = 'USD'
        let expected = { ...initialState, investmentCcy }
        expect(reducer(initialState, updateCurrency(investmentCcy))).toEqual(expected)

        investmentCcy = 'CHF'
        expected = { ...initialState, investmentCcy }
        expect(reducer(initialState, updateCurrency(investmentCcy))).toEqual(expected)
    })

    test('should handle updatePrice reducer', () => {
        let price = {
            'EURUSD': {
                ask: 1.16337,
                bid: 1.16630
            }
        }
        let expected = { ...initialState, price }
        expect(reducer(initialState, updatePrice(price))).toEqual(expected)
    })

    test('should handle updateConfirmation reducer', () => {
        let confirmation = 'Bought 1000 EUR for 1162.31 USD'
        let expected = { ...initialState, confirmation }
        expect(reducer(initialState, updateConfirmation(confirmation))).toEqual(expected)

        confirmation = 'Sold 1000 EUR for 1161.51 USD'
        expected = { ...initialState, confirmation }
        expect(reducer(initialState, updateConfirmation(confirmation))).toEqual(expected)
    })
});