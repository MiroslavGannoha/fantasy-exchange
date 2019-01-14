/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreatePlayerInput = {
  id: string,
  countryCode: string,
  name: string,
  nickname: string,
  playerRole: string,
  steamId?: number | null,
};

export type UpdatePlayerInput = {
  id: string,
  countryCode?: string | null,
  name?: string | null,
  nickname: string,
  playerRole?: string | null,
  steamId?: number | null,
};

export type DeletePlayerInput = {
  id: string,
  nickname: string,
};

export type TablePlayerFilterInput = {
  id?: TableIDFilterInput | null,
  countryCode?: TableStringFilterInput | null,
  name?: TableStringFilterInput | null,
  nickname?: TableStringFilterInput | null,
  playerRole?: TableStringFilterInput | null,
  steamId?: TableIntFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type CreateTaskMutationVariables = {
  owner: string,
  title: string,
  taskStatus: string,
  description: string,
};

export type CreateTaskMutation = {
  createTask:  {
    __typename: "Task",
    id: string,
    owner: string,
    title: string,
    description: string,
    taskStatus: string | null,
  } | null,
};

export type UpdateTaskStatusMutationVariables = {
  id: string,
  taskStatus: string,
};

export type UpdateTaskStatusMutation = {
  updateTaskStatus:  {
    __typename: "Task",
    id: string,
    owner: string,
    title: string,
    description: string,
    taskStatus: string | null,
  } | null,
};

export type UpdateTaskBodyMutationVariables = {
  id: string,
  title: string,
  description: string,
};

export type UpdateTaskBodyMutation = {
  updateTaskBody:  {
    __typename: "Task",
    id: string,
    owner: string,
    title: string,
    description: string,
    taskStatus: string | null,
  } | null,
};

export type CreatePlayerMutationVariables = {
  input: CreatePlayerInput,
};

export type CreatePlayerMutation = {
  createPlayer:  {
    __typename: "Player",
    id: string,
    countryCode: string,
    name: string,
    nickname: string,
    playerRole: string,
    steamId: number | null,
  } | null,
};

export type UpdatePlayerMutationVariables = {
  input: UpdatePlayerInput,
};

export type UpdatePlayerMutation = {
  updatePlayer:  {
    __typename: "Player",
    id: string,
    countryCode: string,
    name: string,
    nickname: string,
    playerRole: string,
    steamId: number | null,
  } | null,
};

export type DeletePlayerMutationVariables = {
  input: DeletePlayerInput,
};

export type DeletePlayerMutation = {
  deletePlayer:  {
    __typename: "Player",
    id: string,
    countryCode: string,
    name: string,
    nickname: string,
    playerRole: string,
    steamId: number | null,
  } | null,
};

export type GetTaskQueryVariables = {
  id: string,
};

export type GetTaskQuery = {
  getTask:  {
    __typename: "Task",
    id: string,
    owner: string,
    title: string,
    description: string,
    taskStatus: string | null,
  } | null,
};

export type AllTasksQueryVariables = {
  nextToken?: string | null,
};

export type AllTasksQuery = {
  allTasks:  {
    __typename: "TaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      owner: string,
      title: string,
      description: string,
      taskStatus: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPlayerQueryVariables = {
  id: string,
  nickname: string,
};

export type GetPlayerQuery = {
  getPlayer:  {
    __typename: "Player",
    id: string,
    countryCode: string,
    name: string,
    nickname: string,
    playerRole: string,
    steamId: number | null,
  } | null,
};

export type ListPlayersQueryVariables = {
  filter?: TablePlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayersQuery = {
  listPlayers:  {
    __typename: "PlayerConnection",
    items:  Array< {
      __typename: "Player",
      id: string,
      countryCode: string,
      name: string,
      nickname: string,
      playerRole: string,
      steamId: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreatePlayerSubscriptionVariables = {
  id?: string | null,
  countryCode?: string | null,
  name?: string | null,
  nickname?: string | null,
  playerRole?: string | null,
};

export type OnCreatePlayerSubscription = {
  onCreatePlayer:  {
    __typename: "Player",
    id: string,
    countryCode: string,
    name: string,
    nickname: string,
    playerRole: string,
    steamId: number | null,
  } | null,
};

export type OnUpdatePlayerSubscriptionVariables = {
  id?: string | null,
  countryCode?: string | null,
  name?: string | null,
  nickname?: string | null,
  playerRole?: string | null,
};

export type OnUpdatePlayerSubscription = {
  onUpdatePlayer:  {
    __typename: "Player",
    id: string,
    countryCode: string,
    name: string,
    nickname: string,
    playerRole: string,
    steamId: number | null,
  } | null,
};

export type OnDeletePlayerSubscriptionVariables = {
  id?: string | null,
  countryCode?: string | null,
  name?: string | null,
  nickname?: string | null,
  playerRole?: string | null,
};

export type OnDeletePlayerSubscription = {
  onDeletePlayer:  {
    __typename: "Player",
    id: string,
    countryCode: string,
    name: string,
    nickname: string,
    playerRole: string,
    steamId: number | null,
  } | null,
};
