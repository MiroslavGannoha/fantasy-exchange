/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, MSTGQLRef, QueryBuilder } from "mst-gql"
import { OfferModel } from "./OfferModel"
import { OfferModelSelector } from "./OfferModel.base"
import { Offer_aggregate_fieldsModel } from "./Offer_aggregate_fieldsModel"
import { Offer_aggregate_fieldsModelSelector } from "./Offer_aggregate_fieldsModel.base"
import { RootStore } from "./index"


/**
 * Offer_aggregateBase
 * auto generated base class for the model Offer_aggregateModel.
 */
export const Offer_aggregateModelBase = MSTGQLObject
  .named('Offer_aggregate')
  .props({
    __typename: types.optional(types.literal("Offer_aggregate"), "Offer_aggregate"),
    aggregate: types.maybeNull(types.late(() => Offer_aggregate_fieldsModel)),
    nodes: types.optional(types.array(MSTGQLRef(types.late(() => OfferModel))), []),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class Offer_aggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | Offer_aggregate_fieldsModelSelector | ((selector: Offer_aggregate_fieldsModelSelector) => Offer_aggregate_fieldsModelSelector)) { return this.__child(`aggregate`, Offer_aggregate_fieldsModelSelector, builder) }
  nodes(builder?: string | OfferModelSelector | ((selector: OfferModelSelector) => OfferModelSelector)) { return this.__child(`nodes`, OfferModelSelector, builder) }
}
export function selectFromOffer_aggregate() {
  return new Offer_aggregateModelSelector()
}

export const offer_aggregateModelPrimitives = selectFromOffer_aggregate()
