import React from "react";

interface IRadioButton {
    label: string;
    value: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const RadioButton: React.FC<IRadioButton> = ({ label, value, checked, onChange }: IRadioButton) => {
    return (
        <label>
            <input type="radio" value={value} checked={checked} onChange={onChange} />
            {label}
        </label>
    );
};

export default React.memo(RadioButton)