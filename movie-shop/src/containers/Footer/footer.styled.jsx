import styled from '@emotion/styled'

export const FooterContainer = styled.div`
    display: flex;
    width: 100%;
    margin-block: 70px;
    flex-direction: column;
`

export const IconList = styled.ul`
    padding: 0px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const IconItem = styled.li`
    &:not(:last-child) {
    margin-right: 50px;
    }
`

export const LinkItem = styled(IconItem)`
    font-size: 18px;
    font-weight: 600;
`

export const Copywrite = styled.p`
    display: flex;
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    color: #6B7280;
    margin-top: 17px;
    justify-content: center;
`