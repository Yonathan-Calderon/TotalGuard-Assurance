import React from "react";

const InputField = ({ value, onChange }) => {
    return (
        <input type="number" value={value} onChange={onChange} placeholder="Quantity" />
    );
}

export default InputField;
