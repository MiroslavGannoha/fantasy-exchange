/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { RootStore } from "./index"


/**
 * Player_stddev_samp_fieldsBase
 * auto generated base class for the model Player_stddev_samp_fieldsModel.
 */
export const Player_stddev_samp_fieldsModelBase = MSTGQLObject
  .named('Player_stddev_samp_fields')
  .props({
    __typename: types.optional(types.literal("Player_stddev_samp_fields"), "Player_stddev_samp_fields"),
    steamId: types.maybeNull(types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class Player_stddev_samp_fieldsModelSelector extends QueryBuilder {
  get steamId() { return this.__attr(`steamId`) }
}
export function selectFromPlayer_stddev_samp_fields() {
  return new Player_stddev_samp_fieldsModelSelector()
}

export const player_stddev_samp_fieldsModelPrimitives = selectFromPlayer_stddev_samp_fields().steamId
