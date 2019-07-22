import { Player_aggregate_fieldsModelBase } from "./Player_aggregate_fieldsModel.base"

/* The TypeScript type of an instance of Player_aggregate_fieldsModel */
export type Player_aggregate_fieldsModelType = typeof Player_aggregate_fieldsModel.Type

/* A graphql query fragment builders for Player_aggregate_fieldsModel */
export { selectFromPlayer_aggregate_fields, player_aggregate_fieldsModelPrimitives, Player_aggregate_fieldsModelSelector } from "./Player_aggregate_fieldsModel.base"

/**
 * Player_aggregate_fieldsModel
 */
export const Player_aggregate_fieldsModel = Player_aggregate_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
