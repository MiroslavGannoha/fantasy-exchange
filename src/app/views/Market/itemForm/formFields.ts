export const formFields = [{
    name: 'volume',
    label: 'Volume',
    rules: 'required|numeric|min:1|max:1000',
}, {
    name: 'startingPrice',
    label: 'Starting price',
    rules: 'required|numeric|min:1|max:1000',
}, {
    name: 'playerId',
    label: 'Player',
    rules: 'required|string',
}, {
    name: 'duration',
    label: 'Duration',
    rules: 'required|string',
}];
