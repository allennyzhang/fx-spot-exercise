import RadioButton from '../components/RadioButton';
import { DirectionEnum } from '../utils/enums';
import { fireEvent, render, screen, } from './test-utils'

describe('RadioButton Component Test with Bid', () => {
    const direction = { label: DirectionEnum.BUY, checked: false, value: DirectionEnum.BUY, onChange: jest.fn }
    render(<RadioButton {...direction} />, {})

    it('renders elements correctly with Bid', () => {
        const labelRadio: HTMLInputElement = screen.getByLabelText(DirectionEnum.BUY);
        expect(labelRadio).toBeDefined();
        expect(labelRadio.checked).toEqual(false);
        fireEvent.change(labelRadio, { target: { value: "SELL" } });
        expect(labelRadio.value).toEqual('SELL');
    })
})
