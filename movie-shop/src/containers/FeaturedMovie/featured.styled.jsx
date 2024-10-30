import styled from '@emotion/styled'

export const Title = styled.h2`
    color: black;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 45px;
`

export const FeaturedContainer = styled.div`
    margin-top: 70px;
`

export const MovieList = styled.ul`
    padding: 0px;
    margin: 0px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

export const SeeMore = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    color: #B91C1C;
    font-size: 18px;
    font-weight: 600;
    &::after{
        display: inline-block;
        content: '';
        width: 20px;
        height: 20px;
        background: url(/right.svg)
    }
`

export const SpaceBeetwen = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`