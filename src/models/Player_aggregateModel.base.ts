/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, MSTGQLRef, QueryBuilder } from "mst-gql"
import { PlayerModel } from "./PlayerModel"
import { PlayerModelSelector } from "./PlayerModel.base"
import { Player_aggregate_fieldsModel } from "./Player_aggregate_fieldsModel"
import { Player_aggregate_fieldsModelSelector } from "./Player_aggregate_fieldsModel.base"
import { RootStore } from "./index"


/**
 * Player_aggregateBase
 * auto generated base class for the model Player_aggregateModel.
 */
export const Player_aggregateModelBase = MSTGQLObject
  .named('Player_aggregate')
  .props({
    __typename: types.optional(types.literal("Player_aggregate"), "Player_aggregate"),
    aggregate: types.maybe(types.late(() => Player_aggregate_fieldsModel)),
    nodes: types.optional(types.array(MSTGQLRef(types.late(() => PlayerModel))), []),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class Player_aggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | Player_aggregate_fieldsModelSelector | ((selector: Player_aggregate_fieldsModelSelector) => Player_aggregate_fieldsModelSelector)) { return this.__child(`aggregate`, Player_aggregate_fieldsModelSelector, builder) }
  nodes(builder?: string | PlayerModelSelector | ((selector: PlayerModelSelector) => PlayerModelSelector)) { return this.__child(`nodes`, PlayerModelSelector, builder) }
}
export function selectFromPlayer_aggregate() {
  return new Player_aggregateModelSelector()
}

export const player_aggregateModelPrimitives = selectFromPlayer_aggregate()
