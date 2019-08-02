/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, MSTGQLRef, QueryBuilder } from "mst-gql"
import { PlayerModel } from "./PlayerModel"
import { PlayerModelSelector } from "./PlayerModel.base"
import { RootStore } from "./index"


/**
 * Player_mutation_responseBase
 * auto generated base class for the model Player_mutation_responseModel.
 */
export const Player_mutation_responseModelBase = MSTGQLObject
  .named('Player_mutation_response')
  .props({
    __typename: types.optional(types.literal("Player_mutation_response"), "Player_mutation_response"),
    affected_rows: types.maybeNull(types.integer),
    returning: types.optional(types.array(MSTGQLRef(types.late(() => PlayerModel))), []),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class Player_mutation_responseModelSelector extends QueryBuilder {
  get affected_rows() { return this.__attr(`affected_rows`) }
  returning(builder?: string | PlayerModelSelector | ((selector: PlayerModelSelector) => PlayerModelSelector)) { return this.__child(`returning`, PlayerModelSelector, builder) }
}
export function selectFromPlayer_mutation_response() {
  return new Player_mutation_responseModelSelector()
}

export const player_mutation_responseModelPrimitives = selectFromPlayer_mutation_response().affected_rows
