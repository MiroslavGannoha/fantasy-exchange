import { Player_mutation_responseModelBase } from "./Player_mutation_responseModel.base"

/* The TypeScript type of an instance of Player_mutation_responseModel */
export type Player_mutation_responseModelType = typeof Player_mutation_responseModel.Type

/* A graphql query fragment builders for Player_mutation_responseModel */
export { selectFromPlayer_mutation_response, player_mutation_responseModelPrimitives, Player_mutation_responseModelSelector } from "./Player_mutation_responseModel.base"

/**
 * Player_mutation_responseModel
 */
export const Player_mutation_responseModel = Player_mutation_responseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
