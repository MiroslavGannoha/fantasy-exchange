/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { Player_avg_fieldsModel } from "./Player_avg_fieldsModel"
import { Player_avg_fieldsModelSelector } from "./Player_avg_fieldsModel.base"
import { Player_max_fieldsModel } from "./Player_max_fieldsModel"
import { Player_max_fieldsModelSelector } from "./Player_max_fieldsModel.base"
import { Player_min_fieldsModel } from "./Player_min_fieldsModel"
import { Player_min_fieldsModelSelector } from "./Player_min_fieldsModel.base"
import { Player_stddev_fieldsModel } from "./Player_stddev_fieldsModel"
import { Player_stddev_fieldsModelSelector } from "./Player_stddev_fieldsModel.base"
import { Player_stddev_pop_fieldsModel } from "./Player_stddev_pop_fieldsModel"
import { Player_stddev_pop_fieldsModelSelector } from "./Player_stddev_pop_fieldsModel.base"
import { Player_stddev_samp_fieldsModel } from "./Player_stddev_samp_fieldsModel"
import { Player_stddev_samp_fieldsModelSelector } from "./Player_stddev_samp_fieldsModel.base"
import { Player_sum_fieldsModel } from "./Player_sum_fieldsModel"
import { Player_sum_fieldsModelSelector } from "./Player_sum_fieldsModel.base"
import { Player_var_pop_fieldsModel } from "./Player_var_pop_fieldsModel"
import { Player_var_pop_fieldsModelSelector } from "./Player_var_pop_fieldsModel.base"
import { Player_var_samp_fieldsModel } from "./Player_var_samp_fieldsModel"
import { Player_var_samp_fieldsModelSelector } from "./Player_var_samp_fieldsModel.base"
import { Player_variance_fieldsModel } from "./Player_variance_fieldsModel"
import { Player_variance_fieldsModelSelector } from "./Player_variance_fieldsModel.base"
import { RootStore } from "./index"


/**
 * Player_aggregate_fieldsBase
 * auto generated base class for the model Player_aggregate_fieldsModel.
 */
export const Player_aggregate_fieldsModelBase = MSTGQLObject
  .named('Player_aggregate_fields')
  .props({
    __typename: types.optional(types.literal("Player_aggregate_fields"), "Player_aggregate_fields"),
    avg: types.maybe(types.late(() => Player_avg_fieldsModel)),
    max: types.maybe(types.late(() => Player_max_fieldsModel)),
    min: types.maybe(types.late(() => Player_min_fieldsModel)),
    stddev: types.maybe(types.late(() => Player_stddev_fieldsModel)),
    stddev_pop: types.maybe(types.late(() => Player_stddev_pop_fieldsModel)),
    stddev_samp: types.maybe(types.late(() => Player_stddev_samp_fieldsModel)),
    sum: types.maybe(types.late(() => Player_sum_fieldsModel)),
    var_pop: types.maybe(types.late(() => Player_var_pop_fieldsModel)),
    var_samp: types.maybe(types.late(() => Player_var_samp_fieldsModel)),
    variance: types.maybe(types.late(() => Player_variance_fieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class Player_aggregate_fieldsModelSelector extends QueryBuilder {
  avg(builder?: string | Player_avg_fieldsModelSelector | ((selector: Player_avg_fieldsModelSelector) => Player_avg_fieldsModelSelector)) { return this.__child(`avg`, Player_avg_fieldsModelSelector, builder) }
  max(builder?: string | Player_max_fieldsModelSelector | ((selector: Player_max_fieldsModelSelector) => Player_max_fieldsModelSelector)) { return this.__child(`max`, Player_max_fieldsModelSelector, builder) }
  min(builder?: string | Player_min_fieldsModelSelector | ((selector: Player_min_fieldsModelSelector) => Player_min_fieldsModelSelector)) { return this.__child(`min`, Player_min_fieldsModelSelector, builder) }
  stddev(builder?: string | Player_stddev_fieldsModelSelector | ((selector: Player_stddev_fieldsModelSelector) => Player_stddev_fieldsModelSelector)) { return this.__child(`stddev`, Player_stddev_fieldsModelSelector, builder) }
  stddev_pop(builder?: string | Player_stddev_pop_fieldsModelSelector | ((selector: Player_stddev_pop_fieldsModelSelector) => Player_stddev_pop_fieldsModelSelector)) { return this.__child(`stddev_pop`, Player_stddev_pop_fieldsModelSelector, builder) }
  stddev_samp(builder?: string | Player_stddev_samp_fieldsModelSelector | ((selector: Player_stddev_samp_fieldsModelSelector) => Player_stddev_samp_fieldsModelSelector)) { return this.__child(`stddev_samp`, Player_stddev_samp_fieldsModelSelector, builder) }
  sum(builder?: string | Player_sum_fieldsModelSelector | ((selector: Player_sum_fieldsModelSelector) => Player_sum_fieldsModelSelector)) { return this.__child(`sum`, Player_sum_fieldsModelSelector, builder) }
  var_pop(builder?: string | Player_var_pop_fieldsModelSelector | ((selector: Player_var_pop_fieldsModelSelector) => Player_var_pop_fieldsModelSelector)) { return this.__child(`var_pop`, Player_var_pop_fieldsModelSelector, builder) }
  var_samp(builder?: string | Player_var_samp_fieldsModelSelector | ((selector: Player_var_samp_fieldsModelSelector) => Player_var_samp_fieldsModelSelector)) { return this.__child(`var_samp`, Player_var_samp_fieldsModelSelector, builder) }
  variance(builder?: string | Player_variance_fieldsModelSelector | ((selector: Player_variance_fieldsModelSelector) => Player_variance_fieldsModelSelector)) { return this.__child(`variance`, Player_variance_fieldsModelSelector, builder) }
}
export function selectFromPlayer_aggregate_fields() {
  return new Player_aggregate_fieldsModelSelector()
}

export const player_aggregate_fieldsModelPrimitives = selectFromPlayer_aggregate_fields()
