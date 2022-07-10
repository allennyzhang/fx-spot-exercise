
import Amount from "./Amount";
import CurrencyPair from "./CurrencyPair";
import CurrencyButtons from "./CurrencyButtons";
import DirectionButtons from "./DirectionButtons";
import CurrencyPrice from "./CurrencyPrice";
import Trade from "./Trade";

const FxSpot: React.FC<{}> = () => {
    return (
        <div id="app">
            <h1 aria-label="FX SPOT">FX SPOT</h1>
            <CurrencyPair />
            <CurrencyPrice />
            <DirectionButtons />
            <CurrencyButtons />
            <Amount />
            <Trade />
        </div>
    )
}

export default FxSpot