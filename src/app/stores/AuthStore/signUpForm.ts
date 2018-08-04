export const signUpFormRules = [{
    name: 'displayName',
    type: 'text',
    label: 'Username',
    placeholder: 'Username',
    rules: 'required|string|between:5,35',
}, {
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
    rules: 'required|string|between:6,35',
}, {
    name: 'passwordConfirm',
    type: 'password',
    label: 'Password Confirmation',
    placeholder: 'Confirm Password',
    rules: 'required|string|same:password',
}];
