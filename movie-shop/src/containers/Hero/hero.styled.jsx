import styled from '@emotion/styled'

export const HeroContainer = styled.div`
    display: flex;
    height: 630px;
    align-items: center;
`

export const Title = styled.h1`
    max-width: 400px;
    font-size: 68px;
    font-weight: 600;
    color: white;
    margin-bottom: 50px;
`

export const Description = styled.p`
    max-width: 300px;
    font-size: 16px;
    font-weight: 500;
    color: white;
`

export const Wrapper = styled.div`
`

export const Trailer = styled.a`
    display: inline-flex;
    width: auto;
    align-items: center;
    background-color: #B91C1C;
    font-size: 18px;
    font-weight: 600;
    color: white;
    padding-block: 15px;
    padding-inline: 25px;
    border-radius: 6px;
    margin-top: 40px;
    &::before{
        display: inline-block;
        content: "";
        background: url('/play.svg');
        width: 25px;
        height: 25px;
        margin-right: 10px;
        background-repeat: no-repeat;
        background-size: cover;
    }
`