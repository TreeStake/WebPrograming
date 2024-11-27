import styled from '@emotion/styled'
import { Field, Form} from "formik";

export const FormContainer = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 345px;
    margin-top: 30px;
`

export const Input = styled(Field)`
    height: 35px;
    border-radius: 10px;
    background-color: white;
    border: 2.5px solid gray;
    margin-bottom: 15px;
`

export const ErorrText = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 5px;
    color: #FF0000;
`

export const SubmitBox = styled.div`
    display: flex;
    justify-content: space-between;
`