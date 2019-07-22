/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, MSTGQLRef, QueryBuilder } from "mst-gql"
import { OfferModel } from "./OfferModel"
import { OfferModelSelector } from "./OfferModel.base"
import { RootStore } from "./index"


/**
 * Offer_mutation_responseBase
 * auto generated base class for the model Offer_mutation_responseModel.
 */
export const Offer_mutation_responseModelBase = MSTGQLObject
  .named('Offer_mutation_response')
  .props({
    __typename: types.optional(types.literal("Offer_mutation_response"), "Offer_mutation_response"),
    affected_rows: types.maybe(types.integer),
    returning: types.optional(types.array(MSTGQLRef(types.late(() => OfferModel))), []),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class Offer_mutation_responseModelSelector extends QueryBuilder {
  get affected_rows() { return this.__attr(`affected_rows`) }
  returning(builder?: string | OfferModelSelector | ((selector: OfferModelSelector) => OfferModelSelector)) { return this.__child(`returning`, OfferModelSelector, builder) }
}
export function selectFromOffer_mutation_response() {
  return new Offer_mutation_responseModelSelector()
}

export const offer_mutation_responseModelPrimitives = selectFromOffer_mutation_response().affected_rows
