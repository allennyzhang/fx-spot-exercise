import React from "react";
import { BidAskEnum } from "../utils/enums";

interface IPrice {
    label: string;
    value: number | undefined;
}

const Price: React.FC<IPrice> = ({ label, value }: IPrice) => {
    const leftRight = label === BidAskEnum.Bid ? 'left' : 'right';
    const valueClass = label === BidAskEnum.Bid ? 'bid spot' : 'ask spot';
    return (
        <div className={leftRight}>
            <div className="label" aria-label={label}>{label}</div>
            <div className={valueClass}>{value}</div>
        </div >
    );
};

export default React.memo(Price)