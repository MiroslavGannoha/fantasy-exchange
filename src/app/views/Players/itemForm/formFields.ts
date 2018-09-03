export const formFields = [{
    name: 'name',
    placeholder: 'First name & Last name',
    rules: 'required|string|min:3',
}, {
    name: 'nickname',
    placeholder: 'Nickname',
    rules: 'required|string|min:3',
}, {
    name: 'steamId',
    placeholder: 'Steam account id',
    rules: 'required|integer',
}, {
    name: 'playerRole',
    placeholder: 'Role',
    rules: 'required|string',
}, {
    name: 'countryCode',
    placeholder: 'Country code',
    rules: 'required|string',
}, {
    name: 'id',
    type: 'hidden',
    output: (value) => { if (value) { return value; } },
}];
