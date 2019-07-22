import { Player_avg_fieldsModelBase } from "./Player_avg_fieldsModel.base"

/* The TypeScript type of an instance of Player_avg_fieldsModel */
export type Player_avg_fieldsModelType = typeof Player_avg_fieldsModel.Type

/* A graphql query fragment builders for Player_avg_fieldsModel */
export { selectFromPlayer_avg_fields, player_avg_fieldsModelPrimitives, Player_avg_fieldsModelSelector } from "./Player_avg_fieldsModel.base"

/**
 * Player_avg_fieldsModel
 */
export const Player_avg_fieldsModel = Player_avg_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
