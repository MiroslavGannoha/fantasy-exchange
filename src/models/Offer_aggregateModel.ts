import { Offer_aggregateModelBase } from "./Offer_aggregateModel.base"

/* The TypeScript type of an instance of Offer_aggregateModel */
export type Offer_aggregateModelType = typeof Offer_aggregateModel.Type

/* A graphql query fragment builders for Offer_aggregateModel */
export { selectFromOffer_aggregate, offer_aggregateModelPrimitives, Offer_aggregateModelSelector } from "./Offer_aggregateModel.base"

/**
 * Offer_aggregateModel
 */
export const Offer_aggregateModel = Offer_aggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
