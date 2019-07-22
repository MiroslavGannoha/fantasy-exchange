import { OfferModelBase } from "./OfferModel.base"

/* The TypeScript type of an instance of OfferModel */
export type OfferModelType = typeof OfferModel.Type

/* A graphql query fragment builders for OfferModel */
export { selectFromOffer, offerModelPrimitives, OfferModelSelector } from "./OfferModel.base"

/**
 * OfferModel
 */
export const OfferModel = OfferModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
