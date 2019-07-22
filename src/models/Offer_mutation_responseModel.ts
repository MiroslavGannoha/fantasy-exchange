import { Offer_mutation_responseModelBase } from "./Offer_mutation_responseModel.base"

/* The TypeScript type of an instance of Offer_mutation_responseModel */
export type Offer_mutation_responseModelType = typeof Offer_mutation_responseModel.Type

/* A graphql query fragment builders for Offer_mutation_responseModel */
export { selectFromOffer_mutation_response, offer_mutation_responseModelPrimitives, Offer_mutation_responseModelSelector } from "./Offer_mutation_responseModel.base"

/**
 * Offer_mutation_responseModel
 */
export const Offer_mutation_responseModel = Offer_mutation_responseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
