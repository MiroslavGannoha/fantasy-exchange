import { Player_var_pop_fieldsModelBase } from "./Player_var_pop_fieldsModel.base"

/* The TypeScript type of an instance of Player_var_pop_fieldsModel */
export type Player_var_pop_fieldsModelType = typeof Player_var_pop_fieldsModel.Type

/* A graphql query fragment builders for Player_var_pop_fieldsModel */
export { selectFromPlayer_var_pop_fields, player_var_pop_fieldsModelPrimitives, Player_var_pop_fieldsModelSelector } from "./Player_var_pop_fieldsModel.base"

/**
 * Player_var_pop_fieldsModel
 */
export const Player_var_pop_fieldsModel = Player_var_pop_fieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
