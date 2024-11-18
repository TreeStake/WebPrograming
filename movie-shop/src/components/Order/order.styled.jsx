import styled from '@emotion/styled'

export const OrderBox = styled.div`
    width: 1100px;;
    display: flex;
    border-radius: 12px;
    border: 3px solid gray;
    padding: 20px 40px;
    justify-content: space-between;
    margin-bottom: 20px;
`

export const OrderedFilm = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: #111827;
`

export const Session = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: #6B7280;
`

export const TotalPrice = styled.p`
    font-size: 18px;
    font-weight: 700;
    color: #111827;
`

export const Counter = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #6B7280;
    margin-inline: 10px;
`


export const MinusButton = styled.button`
    width: 20px;
    height: 20px;
    background: url('/minus.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    border: none;
`

export const PlusButton = styled.button`
    width: 20px;
    height: 20px;
    background: url('/plus.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    border: none;
`

export const CounterWrapper = styled.div`
    display: flex;
`