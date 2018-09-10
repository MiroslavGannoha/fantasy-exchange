export const formFields = [{
    name: 'playerId',
    placeholder: 'Player',
    rules: 'required|string',
    type: 'select',
}, {
    name: 'holderId',
    placeholder: 'Holder',
    rules: 'required|string',
    type: 'select',
}, {
    name: 'volume',
    placeholder: 'Shares volume',
    rules: 'required|integer',
}, {
    name: 'docId',
    type: 'hidden',
    output: (value) => { if (value) { return value; } },
}];
