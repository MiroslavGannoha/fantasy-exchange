/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, MSTGQLRef, QueryBuilder } from "mst-gql"
import { PlayerModel } from "./PlayerModel"
import { PlayerModelSelector } from "./PlayerModel.base"
import { RootStore } from "./index"


/**
 * OfferBase
 * auto generated base class for the model OfferModel.
 */
export const OfferModelBase = MSTGQLObject
  .named('Offer')
  .props({
    __typename: types.optional(types.literal("Offer"), "Offer"),
    amount: types.maybe(types.integer),
    id: types.identifier,
    playerId: types.maybe(MSTGQLRef(types.late(() => PlayerModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class OfferModelSelector extends QueryBuilder {
  get amount() { return this.__attr(`amount`) }
  get id() { return this.__attr(`id`) }
  playerId(builder?: string | PlayerModelSelector | ((selector: PlayerModelSelector) => PlayerModelSelector)) { return this.__child(`playerId`, PlayerModelSelector, builder) }
}
export function selectFromOffer() {
  return new OfferModelSelector()
}

export const offerModelPrimitives = selectFromOffer().amount
