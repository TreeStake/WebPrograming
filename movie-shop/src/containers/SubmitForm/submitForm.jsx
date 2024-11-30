import React from "react";
import { Title } from "../FeaturedMovie/featured.styled";
import { ShoppingBox } from "../ShoppingCard/shoppingCart.styled";
import { SearchButton } from "../Search/search.styled";
import { ErrorMessage, Formik } from "formik";
import * as yup from 'yup';
import { ErorrText, FormContainer, Input, SubmitBox } from "./submitForm.styled";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/orderSlice";

const FormError = ({name}) => {
    return(
        <ErrorMessage name={name} 
        render={messsage => <ErorrText>{messsage}</ErorrText>}/>
    )
}

const schema = yup.object().shape({
    firstName: yup
        .string()
        .max(20, 'First name must be less than 20 characters')
        .matches(/^[a-zA-Z, а-яА-ЯЄєїЇІіґҐ]+$/, 'First name can only contain letters')
        .required('First name is required'),
    lastName: yup
        .string()
        .max(20, 'First name must be less than 20 characters')
        .matches(/^[a-zA-Z, а-яА-ЯЄєїЇІіґҐ]+$/, 'First name can only contain letters')
        .required('Last name is required'),
    email: yup
        .string()
        .email('Invalid email address')
        .matches(/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/, 'Email must contain a dot')
        .required('Email is required'),
    phone: yup
        .string()
        .matches(/^0\d{9}$/, 'Phone number must start with 0 and contain exactly 9 digits')
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

    const onSubmitClick = async() => {
        try {
            await dispatch(clearCart()).unwrap();
            navigate('/success');
        } catch (error) {
            console.error("Failed to clear cart:", error);
            alert("Failed to submit your order. Please try again.");
        }
    };

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
                console.log(values);
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