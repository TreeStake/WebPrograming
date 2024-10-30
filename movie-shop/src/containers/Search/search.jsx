import React from "react";
import { Container } from "../App/app.styled";
import { CanselButton, SearchButton, SearchDiv, SearchInput, SortBy } from "./search.styled";
import SelectOption from "../Select/select";

const options = [
    {
        value: ''
    },
    {
        value: 'Ціна'
    },
    {
        value: 'Перегляди'
    },
    {
        value: 'Тривілість'
    }
]

const Search = () => {
    return(
        <Container>
            <SearchDiv>
                <div>
                <SearchInput/>
                <SearchButton>SEARCH</SearchButton>
                <CanselButton>CANSEL</CanselButton>
                </div>
                <div>
                <SortBy>SORT BY:</SortBy>
                <SelectOption options={options}/>
                </div>
            </SearchDiv>
        </Container>
    )
}

export default Search