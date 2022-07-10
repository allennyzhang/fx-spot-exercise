
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { IState, updateConfirmation } from "../app/spotSlice";
import { RootState } from "../app/store";
import { createTradeConfirmMessage } from "../utils/createTradeConfirmationMessage";

const Trade: React.FC<{}> = () => {
    const dispatch = useAppDispatch();
    const spot: IState = useAppSelector((state: RootState) => state.spot)
    const { amount, ccyPair, buySell, price, investmentCcy, confirmation } = spot;

    const onClick = (): void => {
        const confirmation: string = createTradeConfirmMessage(spot);
        dispatch(updateConfirmation(confirmation))
    }

    const hasPrice: boolean = !!ccyPair && Object.keys(price).length > 0;
    const canTrade: boolean = hasPrice && !!buySell && !!investmentCcy && !!amount && !isNaN(Number(amount));

    return (
        <>
            <div className="row" >
                <button className="trade" type="button" onClick={onClick} disabled={!canTrade}>Trade</button>
            </div >
            {!!confirmation && canTrade && <div className="confirmation">{confirmation}</div>}
        </>
    )
}

export default Trade

