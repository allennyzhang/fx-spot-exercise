
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { updateAmount } from "../app/spotSlice";

const Amount: React.FC<{}> = () => {
    const dispatch = useAppDispatch();
    const amount: string = useAppSelector((state: RootState) => state.spot.amount);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value: string = e.target.value.trim();
        if (!isNaN(Number(value))) {
            dispatch(updateAmount(value));
        }
    }

    return (
        <div className="row" >
            <label htmlFor="amount">Amount </label>
            <input
                type="text"
                id="amount"
                name="amount"
                value={amount}
                onChange={onChange}
                placeholder="Example: 1000"
                aria-label="amount"
            />
        </div>
    )
}

export default Amount

