import { Player_max_fieldsModelBase } from "./Player_max_fieldsModel.base"

/* The TypeScript type of an instance of Player_max_fieldsModel */
export type Player_max_fieldsModelType = typeof Player_max_fieldsModel.Type

/* A graphql query fragment builders for Player_max_fieldsModel */
export { selectFromPlayer_max_fields, player_max_fieldsModelPrimitives, Player_max_fieldsModelSelector } from "./Player_max_fieldsModel.base"

/**
 * Player_max_fieldsModel
 */
export const Player_max_fieldsModel = Player_max_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
