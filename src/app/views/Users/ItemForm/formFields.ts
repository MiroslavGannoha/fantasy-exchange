export const formFields = [{
    name: 'username',
    label: 'Display name',
    rules: 'required|string|min:3',
}, {
    name: 'email',
    label: 'Email',
    rules: 'required|string|email',
}, {
    name: 'accessLevel',
    label: 'Access Level',
    rules: 'required|integer',
}, {
    name: 'id',
    type: 'hidden',
}];
