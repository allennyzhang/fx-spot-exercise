import { fireEvent, render, screen, } from './test-utils'
import Amount from '../features/Amount'

describe('Amount Component Test', () => {
    render(<Amount />, {})

    it('renders elements correctly', () => {
        expect(screen.getByLabelText("Amount")).toBeDefined();
        const amountTextBox: HTMLInputElement = screen.getByRole('textbox', { name: 'amount' });
        expect(amountTextBox).toBeDefined();
        expect(amountTextBox.value).toEqual('1000');
        fireEvent.change(amountTextBox, { target: { value: "100" } });
        expect(amountTextBox.value).toEqual('100');
    })
})