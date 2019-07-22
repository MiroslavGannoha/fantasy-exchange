import { Player_var_samp_fieldsModelBase } from "./Player_var_samp_fieldsModel.base"

/* The TypeScript type of an instance of Player_var_samp_fieldsModel */
export type Player_var_samp_fieldsModelType = typeof Player_var_samp_fieldsModel.Type

/* A graphql query fragment builders for Player_var_samp_fieldsModel */
export { selectFromPlayer_var_samp_fields, player_var_samp_fieldsModelPrimitives, Player_var_samp_fieldsModelSelector } from "./Player_var_samp_fieldsModel.base"

/**
 * Player_var_samp_fieldsModel
 */
export const Player_var_samp_fieldsModel = Player_var_samp_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
