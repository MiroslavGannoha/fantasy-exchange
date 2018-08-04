export const formFields = [{
    name: 'displayName',
    placeholder: 'Display name',
    rules: 'required|string|min:3',
}, {
    name: 'email',
    placeholder: 'Email',
    rules: 'required|string|email',
}, {
    name: 'id',
    type: 'hidden',
    output: (value) => { if (value) { return value; } },
}];
