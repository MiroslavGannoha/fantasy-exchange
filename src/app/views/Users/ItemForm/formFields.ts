export const formFields = [{
    name: 'displayName',
    placeholder: 'Display name',
    rules: 'required|string|min:3',
}, {
    name: 'email',
    placeholder: 'Email',
    rules: 'required|string|email',
}, {
    name: 'accessLevel',
    placeholder: 'Access Level',
    rules: 'required|integer',
}, {
    name: 'docId',
    type: 'hidden',
}];
