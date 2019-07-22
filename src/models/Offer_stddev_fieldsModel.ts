import { Offer_stddev_fieldsModelBase } from "./Offer_stddev_fieldsModel.base"

/* The TypeScript type of an instance of Offer_stddev_fieldsModel */
export type Offer_stddev_fieldsModelType = typeof Offer_stddev_fieldsModel.Type

/* A graphql query fragment builders for Offer_stddev_fieldsModel */
export { selectFromOffer_stddev_fields, offer_stddev_fieldsModelPrimitives, Offer_stddev_fieldsModelSelector } from "./Offer_stddev_fieldsModel.base"

/**
 * Offer_stddev_fieldsModel
 */
export const Offer_stddev_fieldsModel = Offer_stddev_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
