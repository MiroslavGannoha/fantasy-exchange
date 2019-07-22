import { Offer_avg_fieldsModelBase } from "./Offer_avg_fieldsModel.base"

/* The TypeScript type of an instance of Offer_avg_fieldsModel */
export type Offer_avg_fieldsModelType = typeof Offer_avg_fieldsModel.Type

/* A graphql query fragment builders for Offer_avg_fieldsModel */
export { selectFromOffer_avg_fields, offer_avg_fieldsModelPrimitives, Offer_avg_fieldsModelSelector } from "./Offer_avg_fieldsModel.base"

/**
 * Offer_avg_fieldsModel
 */
export const Offer_avg_fieldsModel = Offer_avg_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
