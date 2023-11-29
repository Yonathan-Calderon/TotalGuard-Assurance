import React from "react";

const SelectDropdown = ({ value, onChange }) => {
    return (
        <select value={value} onChange={onChange}>
            <option value="">Select Product</option>
            <option value="productA">Product A</option>
            <option value="productB">Product B</option>
        </select>
    );
}

export default SelectDropdown;
