import { Player_aggregateModelBase } from "./Player_aggregateModel.base"

/* The TypeScript type of an instance of Player_aggregateModel */
export type Player_aggregateModelType = typeof Player_aggregateModel.Type

/* A graphql query fragment builders for Player_aggregateModel */
export { selectFromPlayer_aggregate, player_aggregateModelPrimitives, Player_aggregateModelSelector } from "./Player_aggregateModel.base"

/**
 * Player_aggregateModel
 */
export const Player_aggregateModel = Player_aggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
