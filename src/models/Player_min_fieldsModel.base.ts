/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { RootStore } from "./index"


/**
 * Player_min_fieldsBase
 * auto generated base class for the model Player_min_fieldsModel.
 */
export const Player_min_fieldsModelBase = MSTGQLObject
  .named('Player_min_fields')
  .props({
    __typename: types.optional(types.literal("Player_min_fields"), "Player_min_fields"),
    countryCode: types.maybeNull(types.string),
    name: types.maybeNull(types.string),
    nickname: types.maybeNull(types.string),
    playerRole: types.maybeNull(types.string),
    steamId: types.maybeNull(types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class Player_min_fieldsModelSelector extends QueryBuilder {
  get countryCode() { return this.__attr(`countryCode`) }
  get name() { return this.__attr(`name`) }
  get nickname() { return this.__attr(`nickname`) }
  get playerRole() { return this.__attr(`playerRole`) }
  get steamId() { return this.__attr(`steamId`) }
}
export function selectFromPlayer_min_fields() {
  return new Player_min_fieldsModelSelector()
}

export const player_min_fieldsModelPrimitives = selectFromPlayer_min_fields().countryCode.name.nickname.playerRole.steamId
