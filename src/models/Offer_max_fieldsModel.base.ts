/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { RootStore } from "./index"


/**
 * Offer_max_fieldsBase
 * auto generated base class for the model Offer_max_fieldsModel.
 */
export const Offer_max_fieldsModelBase = MSTGQLObject
  .named('Offer_max_fields')
  .props({
    __typename: types.optional(types.literal("Offer_max_fields"), "Offer_max_fields"),
    amount: types.maybeNull(types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class Offer_max_fieldsModelSelector extends QueryBuilder {
  get amount() { return this.__attr(`amount`) }
}
export function selectFromOffer_max_fields() {
  return new Offer_max_fieldsModelSelector()
}

export const offer_max_fieldsModelPrimitives = selectFromOffer_max_fields().amount
