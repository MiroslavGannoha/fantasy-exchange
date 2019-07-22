import { Player_variance_fieldsModelBase } from "./Player_variance_fieldsModel.base"

/* The TypeScript type of an instance of Player_variance_fieldsModel */
export type Player_variance_fieldsModelType = typeof Player_variance_fieldsModel.Type

/* A graphql query fragment builders for Player_variance_fieldsModel */
export { selectFromPlayer_variance_fields, player_variance_fieldsModelPrimitives, Player_variance_fieldsModelSelector } from "./Player_variance_fieldsModel.base"

/**
 * Player_variance_fieldsModel
 */
export const Player_variance_fieldsModel = Player_variance_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
