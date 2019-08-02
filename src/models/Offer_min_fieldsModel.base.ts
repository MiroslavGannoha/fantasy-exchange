/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { RootStore } from "./index"


/**
 * Offer_min_fieldsBase
 * auto generated base class for the model Offer_min_fieldsModel.
 */
export const Offer_min_fieldsModelBase = MSTGQLObject
  .named('Offer_min_fields')
  .props({
    __typename: types.optional(types.literal("Offer_min_fields"), "Offer_min_fields"),
    amount: types.maybeNull(types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class Offer_min_fieldsModelSelector extends QueryBuilder {
  get amount() { return this.__attr(`amount`) }
}
export function selectFromOffer_min_fields() {
  return new Offer_min_fieldsModelSelector()
}

export const offer_min_fieldsModelPrimitives = selectFromOffer_min_fields().amount
