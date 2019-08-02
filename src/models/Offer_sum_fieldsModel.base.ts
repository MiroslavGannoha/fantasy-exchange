/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { RootStore } from "./index"


/**
 * Offer_sum_fieldsBase
 * auto generated base class for the model Offer_sum_fieldsModel.
 */
export const Offer_sum_fieldsModelBase = MSTGQLObject
  .named('Offer_sum_fields')
  .props({
    __typename: types.optional(types.literal("Offer_sum_fields"), "Offer_sum_fields"),
    amount: types.maybeNull(types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class Offer_sum_fieldsModelSelector extends QueryBuilder {
  get amount() { return this.__attr(`amount`) }
}
export function selectFromOffer_sum_fields() {
  return new Offer_sum_fieldsModelSelector()
}

export const offer_sum_fieldsModelPrimitives = selectFromOffer_sum_fields().amount
