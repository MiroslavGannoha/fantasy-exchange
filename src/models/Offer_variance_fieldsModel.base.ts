/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { RootStore } from "./index"


/**
 * Offer_variance_fieldsBase
 * auto generated base class for the model Offer_variance_fieldsModel.
 */
export const Offer_variance_fieldsModelBase = MSTGQLObject
  .named('Offer_variance_fields')
  .props({
    __typename: types.optional(types.literal("Offer_variance_fields"), "Offer_variance_fields"),
    amount: types.maybe(types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class Offer_variance_fieldsModelSelector extends QueryBuilder {
  get amount() { return this.__attr(`amount`) }
}
export function selectFromOffer_variance_fields() {
  return new Offer_variance_fieldsModelSelector()
}

export const offer_variance_fieldsModelPrimitives = selectFromOffer_variance_fields().amount
