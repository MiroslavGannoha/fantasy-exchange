export const formFields = [{
    name: 'playerId',
    placeholder: 'Player',
    rules: 'required|string',
}, {
    name: 'holderId',
    placeholder: 'Holder',
    rules: 'required|string',
}, {
    name: 'docId',
    placeholder: 'Id name',
    rules: 'required|string|min:3',
    disabled: true,
}, {
    name: 'volume',
    placeholder: 'Shares volume',
    rules: 'required|integer',
}];
