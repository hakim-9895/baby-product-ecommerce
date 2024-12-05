import * as Yup from 'yup'

export const  Signupvalidation=Yup.object({
    name:Yup.string().min(5).required('enter your name'),
    email:Yup.string().email("enter your email").required('enter your email'),
    password:Yup.string().min(5).required('password')
}) 



