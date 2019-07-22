import { Player_min_fieldsModelBase } from "./Player_min_fieldsModel.base"

/* The TypeScript type of an instance of Player_min_fieldsModel */
export type Player_min_fieldsModelType = typeof Player_min_fieldsModel.Type

/* A graphql query fragment builders for Player_min_fieldsModel */
export { selectFromPlayer_min_fields, player_min_fieldsModelPrimitives, Player_min_fieldsModelSelector } from "./Player_min_fieldsModel.base"

/**
 * Player_min_fieldsModel
 */
export const Player_min_fieldsModel = Player_min_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
