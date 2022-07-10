import { render, screen, } from './test-utils'
import FxSpot from '../features/FxSpot'

describe('FxSpot Component Test', () => {
    render(<FxSpot />, {})

    it('renders elements correctly', () => {
        expect(screen.getByLabelText("FX SPOT")).toBeDefined();
        expect(screen.getByRole('textbox', { name: 'amount' })).toBeDefined();
        expect(screen.getByRole('button')).toBeDefined();
    })
})