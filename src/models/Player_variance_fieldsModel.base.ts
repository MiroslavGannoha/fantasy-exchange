/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { RootStore } from "./index"


/**
 * Player_variance_fieldsBase
 * auto generated base class for the model Player_variance_fieldsModel.
 */
export const Player_variance_fieldsModelBase = MSTGQLObject
  .named('Player_variance_fields')
  .props({
    __typename: types.optional(types.literal("Player_variance_fields"), "Player_variance_fields"),
    steamId: types.maybe(types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class Player_variance_fieldsModelSelector extends QueryBuilder {
  get steamId() { return this.__attr(`steamId`) }
}
export function selectFromPlayer_variance_fields() {
  return new Player_variance_fieldsModelSelector()
}

export const player_variance_fieldsModelPrimitives = selectFromPlayer_variance_fields().steamId
