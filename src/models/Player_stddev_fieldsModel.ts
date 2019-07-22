import { Player_stddev_fieldsModelBase } from "./Player_stddev_fieldsModel.base"

/* The TypeScript type of an instance of Player_stddev_fieldsModel */
export type Player_stddev_fieldsModelType = typeof Player_stddev_fieldsModel.Type

/* A graphql query fragment builders for Player_stddev_fieldsModel */
export { selectFromPlayer_stddev_fields, player_stddev_fieldsModelPrimitives, Player_stddev_fieldsModelSelector } from "./Player_stddev_fieldsModel.base"

/**
 * Player_stddev_fieldsModel
 */
export const Player_stddev_fieldsModel = Player_stddev_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
