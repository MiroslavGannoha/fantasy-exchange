/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { RootStore } from "./index"


/**
 * Player_avg_fieldsBase
 * auto generated base class for the model Player_avg_fieldsModel.
 */
export const Player_avg_fieldsModelBase = MSTGQLObject
  .named('Player_avg_fields')
  .props({
    __typename: types.optional(types.literal("Player_avg_fields"), "Player_avg_fields"),
    steamId: types.maybeNull(types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class Player_avg_fieldsModelSelector extends QueryBuilder {
  get steamId() { return this.__attr(`steamId`) }
}
export function selectFromPlayer_avg_fields() {
  return new Player_avg_fieldsModelSelector()
}

export const player_avg_fieldsModelPrimitives = selectFromPlayer_avg_fields().steamId
