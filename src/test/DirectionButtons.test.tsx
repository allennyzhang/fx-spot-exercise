import { fireEvent, render, screen, } from './test-utils'
import DirectionButtons from '../features/DirectionButtons'

describe('DirectionButtons Component Test', () => {
    render(<DirectionButtons />, {})

    it('renders elements correctly', () => {
        const labelRadio: HTMLInputElement = screen.getByLabelText('Buy');
        expect(labelRadio).toBeDefined();
        expect(labelRadio.checked).toEqual(true);
        fireEvent.change(labelRadio, { target: { value: "Sell" } });
        expect(labelRadio.value).toEqual('Sell');
    })
})