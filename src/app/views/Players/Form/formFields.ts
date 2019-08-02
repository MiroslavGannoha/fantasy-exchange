export const formFields = [{
    name: 'name',
    label: 'First name & Last name',
    rules: 'required|string|min:3',
}, {
    name: 'nickname',
    label: 'Nickname',
    rules: 'required|string|min:3',
}, {
    name: 'id',
    label: 'Id name',
    rules: 'required|string|min:3',
    disabled: true,
    type: 'hidden',
    value: null,
    output: (v) => v ? v : undefined,
}, {
    name: 'steamId',
    label: 'Steam account id',
    rules: 'required|integer',
    output: (v) => parseInt(v, 10),
}, {
    name: 'playerRole',
    label: 'Role',
    rules: 'required|string',
}, {
    name: 'countryCode',
    label: 'Country code',
    rules: 'required|string',
}];
