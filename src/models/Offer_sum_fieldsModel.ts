import { Offer_sum_fieldsModelBase } from "./Offer_sum_fieldsModel.base"

/* The TypeScript type of an instance of Offer_sum_fieldsModel */
export type Offer_sum_fieldsModelType = typeof Offer_sum_fieldsModel.Type

/* A graphql query fragment builders for Offer_sum_fieldsModel */
export { selectFromOffer_sum_fields, offer_sum_fieldsModelPrimitives, Offer_sum_fieldsModelSelector } from "./Offer_sum_fieldsModel.base"

/**
 * Offer_sum_fieldsModel
 */
export const Offer_sum_fieldsModel = Offer_sum_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
