import validatorjs from 'validatorjs';

export const plugins = { dvr: validatorjs };
export const fields = [{
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Email',
    rules: 'required|email|string|between:5,35',
}, {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Password',
    rules: 'required|string|between:5,35',
},
/* , {
    name: 'passwordConfirm',
    label: 'Password Confirmation',
    placeholder: 'Confirm Password',
    rules: 'required|string|same:password',
} */];
