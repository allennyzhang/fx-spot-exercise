
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { ICcyPair, updateCurrency } from "../app/spotSlice";
import RadioButton from "../components/RadioButton";

const CurrencyButtons: React.FC<{}> = () => {
    const dispatch = useAppDispatch();
    const ccyPair: ICcyPair | undefined = useAppSelector((state: RootState) => state.spot.ccyPair);
    const investmentCcy: string | undefined = useAppSelector((state: RootState) => state.spot.investmentCcy);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value: string = e.target.value;
        dispatch(updateCurrency(value));
    }
    return (
        <div className="row" >
            {
                !!ccyPair && Object.values(ccyPair).map((ccy) =>
                    <RadioButton
                        key={ccy}
                        label={ccy}
                        checked={ccy === investmentCcy}
                        value={ccy}
                        onChange={onChange}
                    />
                )
            }
        </div>
    )
}

export default CurrencyButtons

