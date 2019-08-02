/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { RootStore } from "./index"


/**
 * Player_sum_fieldsBase
 * auto generated base class for the model Player_sum_fieldsModel.
 */
export const Player_sum_fieldsModelBase = MSTGQLObject
  .named('Player_sum_fields')
  .props({
    __typename: types.optional(types.literal("Player_sum_fields"), "Player_sum_fields"),
    steamId: types.maybeNull(types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class Player_sum_fieldsModelSelector extends QueryBuilder {
  get steamId() { return this.__attr(`steamId`) }
}
export function selectFromPlayer_sum_fields() {
  return new Player_sum_fieldsModelSelector()
}

export const player_sum_fieldsModelPrimitives = selectFromPlayer_sum_fields().steamId
