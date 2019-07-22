/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { RootStore } from "./index"


/**
 * Offer_var_pop_fieldsBase
 * auto generated base class for the model Offer_var_pop_fieldsModel.
 */
export const Offer_var_pop_fieldsModelBase = MSTGQLObject
  .named('Offer_var_pop_fields')
  .props({
    __typename: types.optional(types.literal("Offer_var_pop_fields"), "Offer_var_pop_fields"),
    amount: types.maybe(types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class Offer_var_pop_fieldsModelSelector extends QueryBuilder {
  get amount() { return this.__attr(`amount`) }
}
export function selectFromOffer_var_pop_fields() {
  return new Offer_var_pop_fieldsModelSelector()
}

export const offer_var_pop_fieldsModelPrimitives = selectFromOffer_var_pop_fields().amount
