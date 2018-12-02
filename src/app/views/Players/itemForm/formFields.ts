export const formFields = [{
    name: 'name',
    label: 'First name & Last name',
    rules: 'required|string|min:3',
}, {
    name: 'nickname',
    label: 'Nickname',
    rules: 'required|string|min:3',
}, {
    name: 'docId',
    label: 'Id name',
    rules: 'required|string|min:3',
    disabled: true,
}, {
    name: 'steamId',
    label: 'Steam account id',
    rules: 'required|integer',
}, {
    name: 'playerRole',
    label: 'Role',
    rules: 'required|string',
}, {
    name: 'countryCode',
    label: 'Country code',
    rules: 'required|string',
}];
