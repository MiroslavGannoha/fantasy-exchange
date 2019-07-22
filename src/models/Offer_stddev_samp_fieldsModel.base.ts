/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { RootStore } from "./index"


/**
 * Offer_stddev_samp_fieldsBase
 * auto generated base class for the model Offer_stddev_samp_fieldsModel.
 */
export const Offer_stddev_samp_fieldsModelBase = MSTGQLObject
  .named('Offer_stddev_samp_fields')
  .props({
    __typename: types.optional(types.literal("Offer_stddev_samp_fields"), "Offer_stddev_samp_fields"),
    amount: types.maybe(types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class Offer_stddev_samp_fieldsModelSelector extends QueryBuilder {
  get amount() { return this.__attr(`amount`) }
}
export function selectFromOffer_stddev_samp_fields() {
  return new Offer_stddev_samp_fieldsModelSelector()
}

export const offer_stddev_samp_fieldsModelPrimitives = selectFromOffer_stddev_samp_fields().amount
