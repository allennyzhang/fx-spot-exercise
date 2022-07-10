
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { updateDirection } from "../app/spotSlice";
import { DirectionEnum } from "../utils/enums";
import RadioButton from "../components/RadioButton";

const DirectionButtons: React.FC<{}> = () => {
    const dispatch = useAppDispatch();
    const buySell: string = useAppSelector((state: RootState) => state.spot.buySell);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        dispatch(updateDirection(value))
    }

    const directions: DirectionEnum[] = [DirectionEnum.BUY, DirectionEnum.SELL];

    return (
        <div className="row" >
            {
                directions.map((direction) =>
                    <RadioButton
                        key={direction}
                        label={`${direction.charAt(0)}${direction.slice(1).toLowerCase()}`}
                        checked={direction === buySell}
                        value={direction}
                        onChange={onChange}
                    />
                )
            }
        </div>
    )
}

export default DirectionButtons
