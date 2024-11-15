import styled from '@emotion/styled'

export const Card = styled.li`
    width: 250px;
    min-height: 490px;
    margin-right: 80px;
    &:nth-of-type(4n){
        margin-right: 0px;
    }
    &:nth-of-type(n+5){
        margin-top: 50px;
    }
`

export const Image = styled.img`
    width: 250px;
    height: 390px;
`

export const MovieTitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: #111827;
`

export const Imdb = styled.p`
    display: flex;
    font-size: 12px;
    font-weight: 400;
    color: #111827;
    align-items: center;
    margin-block: 12px;
    &::before{
        display: inline-block;
        content: "";
        width: 35px;
        height: 17px;
        background: url('/imdb.png');
        margin-right: 10px;
    }
`

export const Time = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: #9CA3AF;
    margin-block: 10px;
`

export const Price = styled.p`
    font-size: 18px;
    font-weight: 700;
    color: #111827;
`