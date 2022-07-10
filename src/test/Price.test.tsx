import Price from '../components/Price';
import { BidAskEnum } from '../utils/enums';
import { render, screen, } from './test-utils'

describe('Price Component Test with Bid', () => {
    const price = { label: BidAskEnum.Bid, value: 1.234 }
    render(<Price {...price} />, {})

    it('renders elements correctly with Bid', () => {
        expect(screen.getByLabelText(BidAskEnum.Bid)).toBeDefined();
        expect(screen.getAllByText(/1.234/i)).toBeDefined();
    })
})
