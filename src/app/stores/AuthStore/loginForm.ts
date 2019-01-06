export const loginFormRules = [{
    name: 'username',
    type: 'username',
    label: 'Username',
    placeholder: 'Username',
    rules: 'required|string|between:3,12',
}, {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Password',
    rules: 'required|string|between:5,35',
},
];
