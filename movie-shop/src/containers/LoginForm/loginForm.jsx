import React from "react";
import { Title } from "../FeaturedMovie/featured.styled";
import { ShoppingBox } from "../ShoppingCard/shoppingCart.styled";
import { SearchButton } from "../Search/search.styled";
import { ErrorMessage, Formik } from "formik";
import * as yup from 'yup';
import { ErorrText, FormContainer, Input } from "../SubmitForm/submitForm.styled";
import { SwitchRoute } from "../RegisterForm/registerForm.styled";
import { loginUser } from "../../api";
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
    password: yup
        .string()
        .min(6, 'Пароль має бути не менше 6 символів')
        .max(16, 'Пароль має бути не більше 16 символів')
        .required('Пароль обов’язковий'),
});

const LoginForm = () => {
    const navigate = useNavigate()

    const onSubmitClick = async (values) => {
        try {
        const {username, password} = values
        const response = await loginUser({username, password});
        console.log('Користувач успішно увійшов:', response);
        alert('Логін успішний!');
        localStorage.setItem('token', response.token);
        navigate('/catalog')
        } catch (error) {
        console.error('Помилка логіну:', error);
        alert('Не вдалося увійти. Перевірте дані.');
        }
      };

    return(
        <>
        <ShoppingBox>
            <Title>Login Form</Title>
            <Formik
            initialValues={{
                username:'',
                password: ''}}
            validationSchema={schema}
            onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm();
                onSubmitClick(values)}}>
                <FormContainer>
                    <Input name="username" placeholder="Username"/>
                    <FormError name="username"/>
                    <Input name="password" placeholder="Password"/>
                    <FormError name="password"/>
                    <SwitchRoute to='/register'>Not registered?</SwitchRoute>
                    <SearchButton type="submit">Login</SearchButton>
                </FormContainer>
            </Formik>
            
        </ShoppingBox>
        </>
    )
}

export default LoginForm