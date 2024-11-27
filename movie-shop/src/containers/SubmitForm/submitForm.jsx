import React from "react";
import { Title } from "../FeaturedMovie/featured.styled";
import { ShoppingBox } from "../ShoppingCard/shoppingCart.styled";
import { SearchButton } from "../Search/search.styled";
import { ErrorMessage, Formik } from "formik";
import * as yup from 'yup';
import { ErorrText, FormContainer, Input, SubmitBox } from "./submitForm.styled";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearOrders } from "../../redux/orderSlice";

const FormError = ({name}) => {
    return(
        <ErrorMessage name={name} 
        render={messsage => <ErorrText>{messsage}</ErorrText>}/>
    )
}

const schema = yup.object().shape({
    firstName: yup
        .string()
        .required('First name is required'),
    lastName: yup
        .string()
        .required('Last name is required'),
    email: yup
        .string()
        .email('Invalid email address')
        .required('Email is required'),
    phone: yup
        .string()
        .matches(/^\d{9,15}$/, 'Phone number must be between 9 and 15 digits')
        .required('Phone number is required'),
    address: yup
        .string()
        .min(5, 'Address must be at least 5 characters long')
        .required('Address is required'),
});

const SubmitForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onBackClick = () => {
        navigate('/cart')
    }

    const onSubmitClick = () => {
        navigate('/success')
        dispatch(clearOrders())
    }

    return(
        <>
        <ShoppingBox>
            <Title>Submit Form</Title>
            <Formik
            initialValues={{
                firstName:'',
                lastName: '',
                email: '',
                phone: '',
                address: ''}}
            validationSchema={schema}
            onSubmit={(values, { resetForm }) => {
                console.log(values); // Виконуєте необхідну дію з даними форми
                resetForm();
                onSubmitClick()}}>
                <FormContainer>
                    <Input name="firstName" placeholder="First name"/>
                    <FormError name="firstName"/>
                    <Input name="lastName" placeholder="Last name"/>
                    <FormError name="lastName"/>
                    <Input name="email" placeholder="Email"/>
                    <FormError name="email"/>
                    <Input name="phone" placeholder="Phone"/>
                    <FormError name="phone"/>
                    <Input name="address" placeholder="Address"/>
                    <FormError name="address"/>
                    <SubmitBox>
                        <SearchButton type='button' onClick={onBackClick}>Go Back</SearchButton>
                        <SearchButton type="submit">Countinue</SearchButton>
                    </SubmitBox>
                </FormContainer>
            </Formik>
            
        </ShoppingBox>
        </>
    )
}

export default SubmitForm