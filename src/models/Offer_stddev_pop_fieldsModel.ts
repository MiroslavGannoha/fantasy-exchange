import { Offer_stddev_pop_fieldsModelBase } from "./Offer_stddev_pop_fieldsModel.base"

/* The TypeScript type of an instance of Offer_stddev_pop_fieldsModel */
export type Offer_stddev_pop_fieldsModelType = typeof Offer_stddev_pop_fieldsModel.Type

/* A graphql query fragment builders for Offer_stddev_pop_fieldsModel */
export { selectFromOffer_stddev_pop_fields, offer_stddev_pop_fieldsModelPrimitives, Offer_stddev_pop_fieldsModelSelector } from "./Offer_stddev_pop_fieldsModel.base"

/**
 * Offer_stddev_pop_fieldsModel
 */
export const Offer_stddev_pop_fieldsModel = Offer_stddev_pop_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
