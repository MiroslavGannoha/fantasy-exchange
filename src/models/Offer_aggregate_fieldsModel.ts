import { Offer_aggregate_fieldsModelBase } from "./Offer_aggregate_fieldsModel.base"

/* The TypeScript type of an instance of Offer_aggregate_fieldsModel */
export type Offer_aggregate_fieldsModelType = typeof Offer_aggregate_fieldsModel.Type

/* A graphql query fragment builders for Offer_aggregate_fieldsModel */
export { selectFromOffer_aggregate_fields, offer_aggregate_fieldsModelPrimitives, Offer_aggregate_fieldsModelSelector } from "./Offer_aggregate_fieldsModel.base"

/**
 * Offer_aggregate_fieldsModel
 */
export const Offer_aggregate_fieldsModel = Offer_aggregate_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
