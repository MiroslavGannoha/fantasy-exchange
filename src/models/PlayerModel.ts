import { PlayerModelBase } from "./PlayerModel.base"

/* The TypeScript type of an instance of PlayerModel */
export type PlayerModelType = typeof PlayerModel.Type

/* A graphql query fragment builders for PlayerModel */
export { selectFromPlayer, playerModelPrimitives, PlayerModelSelector } from "./PlayerModel.base"

/**
 * PlayerModel
 */
export const PlayerModel = PlayerModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
