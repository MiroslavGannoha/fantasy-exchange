// tslint:disable
// this is an auto generated file. This will be overwritten

export const getTask = `query GetTask($id: ID!) {
  getTask(id: $id) {
    id
    owner
    title
    description
    taskStatus
  }
}
`;
export const allTasks = `query AllTasks($nextToken: String) {
  allTasks(nextToken: $nextToken) {
    items {
      id
      owner
      title
      description
      taskStatus
    }
    nextToken
  }
}
`;
export const getPlayer = `query GetPlayer($id: ID!, $nickname: String!) {
  getPlayer(id: $id, nickname: $nickname) {
    id
    countryCode
    name
    nickname
    playerRole
    steamId
  }
}
`;
export const listPlayers = `query ListPlayers(
  $filter: TablePlayerFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      countryCode
      name
      nickname
      playerRole
      steamId
    }
    nextToken
  }
}
`;
