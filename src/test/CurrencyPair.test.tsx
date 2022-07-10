import { fireEvent, render, screen, } from './test-utils'
import CurrencyPair from '../features/CurrencyPair'

describe('CurrencyPair Component Test', () => {
    render(<CurrencyPair />, {})

    it('renders elements correctly', () => {
        expect(screen.getByLabelText("Currency")).toBeDefined();
        const select: HTMLInputElement = screen.getByTestId('select-currency-pair');
        expect(select).toBeDefined();
        expect(select.value).toEqual('eur,usd');
        fireEvent.change(select, { target: { value: "eur,chf" } });
        expect(select.value).toEqual('eur,chf');
    })
})