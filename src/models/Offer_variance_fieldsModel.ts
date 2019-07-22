import { Offer_variance_fieldsModelBase } from "./Offer_variance_fieldsModel.base"

/* The TypeScript type of an instance of Offer_variance_fieldsModel */
export type Offer_variance_fieldsModelType = typeof Offer_variance_fieldsModel.Type

/* A graphql query fragment builders for Offer_variance_fieldsModel */
export { selectFromOffer_variance_fields, offer_variance_fieldsModelPrimitives, Offer_variance_fieldsModelSelector } from "./Offer_variance_fieldsModel.base"

/**
 * Offer_variance_fieldsModel
 */
export const Offer_variance_fieldsModel = Offer_variance_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
