import { Offer_stddev_samp_fieldsModelBase } from "./Offer_stddev_samp_fieldsModel.base"

/* The TypeScript type of an instance of Offer_stddev_samp_fieldsModel */
export type Offer_stddev_samp_fieldsModelType = typeof Offer_stddev_samp_fieldsModel.Type

/* A graphql query fragment builders for Offer_stddev_samp_fieldsModel */
export { selectFromOffer_stddev_samp_fields, offer_stddev_samp_fieldsModelPrimitives, Offer_stddev_samp_fieldsModelSelector } from "./Offer_stddev_samp_fieldsModel.base"

/**
 * Offer_stddev_samp_fieldsModel
 */
export const Offer_stddev_samp_fieldsModel = Offer_stddev_samp_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
