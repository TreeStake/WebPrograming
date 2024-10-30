import React from "react";
import { Option, Select } from "../Search/search.styled";

const SelectOption = ({options}) => {
    return(
        <Select>
            {options.map(option => (
                <Option>{option.value}</Option>
            ))}
            {/* <Option></Option>
                    <Option>Ціною</Option>
                    <Option>Переглядами</Option>
                    <Option>Тривалістю</Option> */}
        </Select>
    )
}

export default SelectOption