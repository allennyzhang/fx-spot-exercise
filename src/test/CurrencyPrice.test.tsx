import { render, screen, } from './test-utils'
import CurrencyPrice from '../features/CurrencyPrice'

describe('CurrencyPrice Component Test', () => {
    render(<CurrencyPrice />, {})

    it('renders elements correctly', () => {
        expect(screen.getByLabelText("Bid")).toBeDefined();
        expect(screen.getByLabelText("Ask")).toBeDefined();
    })
})