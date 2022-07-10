import { fireEvent, render, screen, } from './test-utils'
import CurrencyButtons from '../features/CurrencyButtons'

describe('CurrencyButtons Component Test', () => {
    render(<CurrencyButtons />, {})

    it('renders elements correctly', () => {
        const labelRadio: HTMLInputElement = screen.getByLabelText('EUR');
        expect(labelRadio).toBeDefined();
        expect(labelRadio.checked).toEqual(true);
        fireEvent.change(labelRadio, { target: { value: "USD" } });
        expect(labelRadio.value).toEqual('USD');
    })
})