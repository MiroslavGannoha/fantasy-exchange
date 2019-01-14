// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreatePlayer = `subscription OnCreatePlayer(
  $id: ID
  $countryCode: String
  $name: String
  $nickname: String
  $playerRole: String
) {
  onCreatePlayer(
    id: $id
    countryCode: $countryCode
    name: $name
    nickname: $nickname
    playerRole: $playerRole
  ) {
    id
    countryCode
    name
    nickname
    playerRole
    steamId
  }
}
`;
export const onUpdatePlayer = `subscription OnUpdatePlayer(
  $id: ID
  $countryCode: String
  $name: String
  $nickname: String
  $playerRole: String
) {
  onUpdatePlayer(
    id: $id
    countryCode: $countryCode
    name: $name
    nickname: $nickname
    playerRole: $playerRole
  ) {
    id
    countryCode
    name
    nickname
    playerRole
    steamId
  }
}
`;
export const onDeletePlayer = `subscription OnDeletePlayer(
  $id: ID
  $countryCode: String
  $name: String
  $nickname: String
  $playerRole: String
) {
  onDeletePlayer(
    id: $id
    countryCode: $countryCode
    name: $name
    nickname: $nickname
    playerRole: $playerRole
  ) {
    id
    countryCode
    name
    nickname
    playerRole
    steamId
  }
}
`;
