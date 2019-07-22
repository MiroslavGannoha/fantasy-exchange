import { Player_stddev_samp_fieldsModelBase } from "./Player_stddev_samp_fieldsModel.base"

/* The TypeScript type of an instance of Player_stddev_samp_fieldsModel */
export type Player_stddev_samp_fieldsModelType = typeof Player_stddev_samp_fieldsModel.Type

/* A graphql query fragment builders for Player_stddev_samp_fieldsModel */
export { selectFromPlayer_stddev_samp_fields, player_stddev_samp_fieldsModelPrimitives, Player_stddev_samp_fieldsModelSelector } from "./Player_stddev_samp_fieldsModel.base"

/**
 * Player_stddev_samp_fieldsModel
 */
export const Player_stddev_samp_fieldsModel = Player_stddev_samp_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
