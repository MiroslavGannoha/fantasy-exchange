import { Player_sum_fieldsModelBase } from "./Player_sum_fieldsModel.base"

/* The TypeScript type of an instance of Player_sum_fieldsModel */
export type Player_sum_fieldsModelType = typeof Player_sum_fieldsModel.Type

/* A graphql query fragment builders for Player_sum_fieldsModel */
export { selectFromPlayer_sum_fields, player_sum_fieldsModelPrimitives, Player_sum_fieldsModelSelector } from "./Player_sum_fieldsModel.base"

/**
 * Player_sum_fieldsModel
 */
export const Player_sum_fieldsModel = Player_sum_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
