export const formFields = [{
    name: 'playerId',
    label: 'Player',
    rules: 'required|string',
    type: 'select',
}, {
    name: 'holderId',
    label: 'Holder',
    rules: 'required|string',
    type: 'select',
}, {
    name: 'volume',
    label: 'Shares volume',
    rules: 'required|integer',
}, {
    name: 'docId',
    type: 'hidden',
    output: (value) => { if (value) { return value; } },
}];
