import React from "react";
import { Option, Select } from "../Search/search.styled";

const SelectOption = ({options, onSortChange}) => {
    const handleChange = (event) => {
        onSortChange(event.target.value); // Передаємо вибраний параметр сортування
    };
    return(
        <Select onChange={handleChange}>
            {options.map(option => (
                <Option key={option.value} value={option.value}>{option.label}</Option>
            ))}
            {/* <Option></Option>
                    <Option>Ціною</Option>
                    <Option>Переглядами</Option>
                    <Option>Тривалістю</Option> */}
        </Select>
    )
}

export default SelectOption