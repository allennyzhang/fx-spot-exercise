import { fireEvent, render, screen, } from './test-utils'
import Trade from '../features/Trade'

describe('Trade Component Test', () => {
    render(<Trade />, {})

    it('renders elements correctly', () => {
        const button: HTMLInputElement = screen.getByRole('button');
        expect(button).toBeDefined();
        expect(button).toBeDisabled();
        fireEvent.click(button);
    })
})