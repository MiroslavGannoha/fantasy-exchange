import { Offer_max_fieldsModelBase } from "./Offer_max_fieldsModel.base"

/* The TypeScript type of an instance of Offer_max_fieldsModel */
export type Offer_max_fieldsModelType = typeof Offer_max_fieldsModel.Type

/* A graphql query fragment builders for Offer_max_fieldsModel */
export { selectFromOffer_max_fields, offer_max_fieldsModelPrimitives, Offer_max_fieldsModelSelector } from "./Offer_max_fieldsModel.base"

/**
 * Offer_max_fieldsModel
 */
export const Offer_max_fieldsModel = Offer_max_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
