import { listPlayers, getPlayer } from '../queries';
import { createPlayer, updatePlayer, deletePlayer } from '../mutations';

export default {
    getAll: {query: listPlayers, name: 'listPlayers'},
    get: {query: getPlayer, name: 'getPlayer'},
    create: {query: createPlayer, name: 'createPlayer'},
    update: {query: updatePlayer, name: 'updatePlayer'},
    delete: {query: deletePlayer, name: 'deletePlayer'},
};
