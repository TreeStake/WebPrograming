import React, { useState } from "react";
import { Container } from "../App/app.styled";
import { CanselButton, SearchButton, SearchDiv, SearchInput, SortBy } from "./search.styled";
import SelectOption from "../Select/select";

const options = [
    { value: '', label: 'Виберіть' },
    { value: 'price', label: 'Ціна' },
    { value: 'views', label: 'Перегляди' },
    { value: 'duration', label: 'Тривалість' }
];

const Search = ({onSearchChange, onSortChange}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearchClick = () => {
        onSearchChange(inputValue);
    };

    const canselClick = () => {
        setInputValue('')
        onSearchChange('')
    }

    return (
        <Container>
            <SearchDiv>
                <div>
                    <SearchInput onChange={handleInputChange} value={inputValue} />
                    <SearchButton onClick={handleSearchClick}>SEARCH</SearchButton>
                    <CanselButton onClick={canselClick}>CANSEL</CanselButton>
                </div>
                <div>
                <SortBy>SORT BY:</SortBy>
                <SelectOption options={options} onSortChange={onSortChange}/>
                </div>
            </SearchDiv>
        </Container>
    )
}

export default Search