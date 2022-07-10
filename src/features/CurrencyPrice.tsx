import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { ICcyPair, IPrice, updatePrice } from "../app/spotSlice";
import { BidAskEnum } from "../utils/enums";
import Price from "../components/Price";
import { fxRateSubscriber } from "../utils/fxRateSubscriber";
import { getCcyKey } from "../utils/getCcyKey";

const CurrencyPrice: React.FC<{}> = () => {
    const dispatch = useAppDispatch();
    const price: IPrice = useAppSelector((state: RootState) => state.spot.price);
    const ccyPair: ICcyPair | undefined = useAppSelector((state: RootState) => state.spot.ccyPair);

    const hasPrice: boolean = Object.keys(price).length > 0;
    const ask: number | undefined = hasPrice && ccyPair ? price[getCcyKey(ccyPair)].ask : undefined;
    const bid: number | undefined = hasPrice && ccyPair ? price[getCcyKey(ccyPair)].bid : undefined;

    useEffect(() => {
        const { subscribe, unsubscribe } = fxRateSubscriber({
            onReceive: (price: IPrice) => dispatch(updatePrice(price)),
        });
        if (!!ccyPair) {
            subscribe()
        }

        return () => { unsubscribe() }
    }, [dispatch, ccyPair])

    const bidAsk: BidAskEnum[] = [BidAskEnum.Bid, BidAskEnum.Ask];
    return (
        <div className="ticker row">
            {
                bidAsk.map((item) =>
                    <Price
                        key={item}
                        label={item}
                        value={item === BidAskEnum.Bid ? bid : ask}
                    />
                )
            }
        </div>
    )
}

export default CurrencyPrice