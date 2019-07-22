import { Player_stddev_pop_fieldsModelBase } from "./Player_stddev_pop_fieldsModel.base"

/* The TypeScript type of an instance of Player_stddev_pop_fieldsModel */
export type Player_stddev_pop_fieldsModelType = typeof Player_stddev_pop_fieldsModel.Type

/* A graphql query fragment builders for Player_stddev_pop_fieldsModel */
export { selectFromPlayer_stddev_pop_fields, player_stddev_pop_fieldsModelPrimitives, Player_stddev_pop_fieldsModelSelector } from "./Player_stddev_pop_fieldsModel.base"

/**
 * Player_stddev_pop_fieldsModel
 */
export const Player_stddev_pop_fieldsModel = Player_stddev_pop_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
