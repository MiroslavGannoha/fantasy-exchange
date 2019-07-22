/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { RootStore } from "./index"


/**
 * PlayerBase
 * auto generated base class for the model PlayerModel.
 */
export const PlayerModelBase = MSTGQLObject
  .named('Player')
  .props({
    __typename: types.optional(types.literal("Player"), "Player"),
    countryCode: types.maybe(types.string),
    id: types.identifier,
    name: types.maybe(types.string),
    nickname: types.maybe(types.string),
    playerRole: types.maybe(types.string),
    steamId: types.maybe(types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class PlayerModelSelector extends QueryBuilder {
  get countryCode() { return this.__attr(`countryCode`) }
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get nickname() { return this.__attr(`nickname`) }
  get playerRole() { return this.__attr(`playerRole`) }
  get steamId() { return this.__attr(`steamId`) }
}
export function selectFromPlayer() {
  return new PlayerModelSelector()
}

export const playerModelPrimitives = selectFromPlayer().countryCode.name.nickname.playerRole.steamId
