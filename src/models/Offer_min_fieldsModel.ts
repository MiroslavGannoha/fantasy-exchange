import { Offer_min_fieldsModelBase } from "./Offer_min_fieldsModel.base"

/* The TypeScript type of an instance of Offer_min_fieldsModel */
export type Offer_min_fieldsModelType = typeof Offer_min_fieldsModel.Type

/* A graphql query fragment builders for Offer_min_fieldsModel */
export { selectFromOffer_min_fields, offer_min_fieldsModelPrimitives, Offer_min_fieldsModelSelector } from "./Offer_min_fieldsModel.base"

/**
 * Offer_min_fieldsModel
 */
export const Offer_min_fieldsModel = Offer_min_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
