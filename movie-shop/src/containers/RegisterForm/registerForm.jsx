import React from "react";
import { Title } from "../FeaturedMovie/featured.styled";
import { ShoppingBox } from "../ShoppingCard/shoppingCart.styled";
import { SearchButton } from "../Search/search.styled";
import { ErrorMessage, Formik } from "formik";
import * as yup from 'yup';
import { ErorrText, FormContainer, Input } from "../SubmitForm/submitForm.styled";
import { SwitchRoute } from "./registerForm.styled";
import { registerUser } from "../../api";
import { useNavigate } from "react-router-dom";


const FormError = ({name}) => {
    return(
        <ErrorMessage name={name} 
        render={messsage => <ErorrText>{messsage}</ErorrText>}/>
    )
}

const schema = yup.object().shape({
    username: yup
        .string()
        .max(20, 'username name must be less than 20 characters')
        .matches(/^[a-zA-Z, а-яА-ЯЄєїЇІіґҐ]+$/, 'username name can only contain letters')
        .required('username name is required'),
    email: yup
        .string()
        .email('Invalid email address')
        .matches(/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/, 'Email must contain a dot')
        .required('Email is required'),
    password: yup
        .string()
        .min(6, 'Пароль має бути не менше 6 символів')
        .max(16, 'Пароль має бути не більше 16 символів')
        .required('Пароль обов’язковий'),
    retypePassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Паролі мають збігатися')
        .required('Повторний пароль обов’язковий')
});

const RegisterForm = () => {
    const navigate = useNavigate()

    const onSubmitClick = async (values) => {
        try {
        const {username, password} = values
        const response = await registerUser({username, password});
        console.log('Користувач успішно зареєстрований:', response);
        alert('Реєстрація успішна!');
        navigate('/login')
        } catch (error) {
        console.error('Помилка реєстрації:', error);
        alert('Не вдалося зареєструвати користувача.');
        }
      };

    return(
        <>
        <ShoppingBox>
            <Title>Register Form</Title>
            <Formik
            initialValues={{
                username:'',
                email: '',
                password: '',
                retypePassword: ''}}
            validationSchema={schema}
            onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm();
                onSubmitClick(values)}}>
                <FormContainer>
                    <Input name="username" placeholder="Username"/>
                    <FormError name="username"/>
                    <Input name="email" placeholder="Email"/>
                    <FormError name="email"/>
                    <Input name="password" placeholder="Password"/>
                    <FormError name="password"/>
                    <Input name="retypePassword" placeholder="Retype Password"/>
                    <FormError name="retypePassword"/>
                    <SwitchRoute to='/login'>Ready registered?</SwitchRoute>
                    <SearchButton type="submit">Register</SearchButton>
                </FormContainer>
            </Formik>
            
        </ShoppingBox>
        </>
    )
}

export default RegisterForm