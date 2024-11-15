import styled from '@emotion/styled'

export const SearchDiv = styled.div`
    width: 100%;
    display: flex;
    height: 60px;
    align-items: center;
    margin-top: 50px;
    justify-content: space-between;
`

export const SearchInput = styled.input`
    width: 200px;
    height: 35px;
    border-radius: 10px;
    background-color: white;
    border: 2.5px solid gray;
`

export const SearchButton = styled.button`
    color: white;
    padding-block: 10px;
    padding-inline: 20px;
    font-size: 16px;
    font-weight: 600;
    background-color: #B91C1C;
    border-radius: 7px;
    border: none;
    margin-left: 10px;
`

export const CanselButton = styled(SearchButton)`
    background-color: gray;
`

export const Select = styled.select`
    width: auto;
    background-color: white;
    color: black;
    padding: 8px 20px;
    font-size: 16px;
    font-weight: 500;
    border: 3px solid gray;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
`

export const Option = styled.option`
    background-color: white;
    color: black;
`

export const SortBy = styled.p`
    display: inline-block;
    color: black;
    font-size: 18px;
    font-weight: 600;
    margin-left: 20px;
`