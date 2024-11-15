import React, { useState } from "react";
import { Container } from "../App/app.styled";
import { CanselButton, SearchButton, SearchDiv, SearchInput, SortBy } from "./search.styled";
import SelectOption from "../Select/select";

const optionsSort = [
    { value: '', label: 'Виберіть' },
    { value: 'price', label: 'Ціна' },
    { value: 'views', label: 'Перегляди' },
    { value: 'duration', label: 'Тривалість' }
];

const optionsFilterPrice = [
    { value: '', label: 'Виберіть' },
    { value: 'up to 200', label: 'Менше 200$' },
    { value: 'more then 200', label: 'Більше 200$' }
];

const optionsFilterViews = [
    { value: '', label: 'Виберіть' },
    { value: 'up to 2000000', label: 'Менше 2000000' },
    { value: 'more then 2000000', label: 'Більше 2000000' }
];

const Search = ({onSearchAndSort}) => {
    const [inputValue, setInputValue] = useState('');
    const [sortValue, setSortValue] = useState('');
    const [filterPrice, setFilterPrice] = useState('');
    const [filterViews, setFilterViews] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearchClick = () => {
        onSearchAndSort(inputValue, sortValue, filterPrice, filterViews);
      };

    const canselClick = () => {
        setInputValue('');
        setSortValue('');
        onSearchAndSort('', sortValue, filterPrice, filterViews);
    }

    const handleSortChange = (sortOption) => {
        setSortValue(sortOption);
        onSearchAndSort(inputValue, sortOption, filterPrice, filterViews);
      };

    const handleFilterPrice = (filterOption) => {
        setFilterPrice(filterOption)
        onSearchAndSort(inputValue, sortValue, filterOption, filterViews);
    }

    const handleFilterViews = (filterOption) => {
        setFilterViews(filterOption)
        onSearchAndSort(inputValue, sortValue, filterPrice, filterOption);
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
                <SortBy>PRICE:</SortBy>
                <SelectOption options={optionsFilterPrice} onSortChange={handleFilterPrice}/>
                <SortBy>VIEWS:</SortBy>
                <SelectOption options={optionsFilterViews} onSortChange={handleFilterViews}/>
                <SortBy>SORT:</SortBy>
                <SelectOption options={optionsSort} onSortChange={handleSortChange}/>
                </div>
            </SearchDiv>
        </Container>
    )
}

export default Search