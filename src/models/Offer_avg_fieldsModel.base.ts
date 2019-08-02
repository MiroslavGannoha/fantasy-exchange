/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { RootStore } from "./index"


/**
 * Offer_avg_fieldsBase
 * auto generated base class for the model Offer_avg_fieldsModel.
 */
export const Offer_avg_fieldsModelBase = MSTGQLObject
  .named('Offer_avg_fields')
  .props({
    __typename: types.optional(types.literal("Offer_avg_fields"), "Offer_avg_fields"),
    amount: types.maybeNull(types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class Offer_avg_fieldsModelSelector extends QueryBuilder {
  get amount() { return this.__attr(`amount`) }
}
export function selectFromOffer_avg_fields() {
  return new Offer_avg_fieldsModelSelector()
}

export const offer_avg_fieldsModelPrimitives = selectFromOffer_avg_fields().amount
