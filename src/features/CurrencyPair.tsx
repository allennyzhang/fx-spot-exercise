
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { ICcyPair, updateCcyPair, updateConfirmation, updateCurrency } from "../app/spotSlice";
import { CurrencyPairsEnum } from "../utils/enums";

const CurrencyPair: React.FC<{}> = () => {
    const dispatch = useAppDispatch();
    const investmentCcy: string | undefined = useAppSelector((state: RootState) => state.spot.investmentCcy);
    const ccyPair: ICcyPair | undefined = useAppSelector((state: RootState) => state.spot.ccyPair);
    const ccyPairValue: string = !!ccyPair ? `${ccyPair.ccy1.toLowerCase()},${ccyPair.ccy2.toLowerCase()}` : '';

    const onChange = (e: React.ChangeEvent<{ value: string }>): void => {
        const value: string = e.target.value;
        if (!!value) {
            const [ccy1, ccy2] = value.split(",").map(item => item.toUpperCase());
            dispatch(updateCcyPair({ ccy1, ccy2 }))
            if (investmentCcy && ![ccy1, ccy2].includes(investmentCcy)) {
                dispatch(updateCurrency(undefined))
            }
        } else {
            dispatch(updateCcyPair(undefined))
            dispatch(updateCurrency(undefined))
        }
        dispatch(updateConfirmation(''))
    }

    const getCcyPairValue = (currencyPair: CurrencyPairsEnum): string => {
        return currencyPair.split('/').map(item => item.trim().toLowerCase()).join(',');
    }

    const ccyPairs: CurrencyPairsEnum[] = [
        CurrencyPairsEnum.EURUSD,
        CurrencyPairsEnum.EURCHF,
        CurrencyPairsEnum.USDCHF
    ];
    const ccyPairsOptions: JSX.Element[] = ccyPairs.map((currencyPair) => (
        <option key={currencyPair} value={getCcyPairValue(currencyPair)}>
            {currencyPair}
        </option>
    ))

    return (
        <div className="row">
            <label aria-label="Currency">Currency Pair </label>
            <select className="select-currency-pair" data-testid="select-currency-pair" value={ccyPairValue} onChange={onChange}>
                <option value="">No currency selected</option>
                {ccyPairsOptions}
            </select>
        </div>
    )
}

export default CurrencyPair
