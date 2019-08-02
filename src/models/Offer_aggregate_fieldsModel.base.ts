/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { Offer_avg_fieldsModel } from "./Offer_avg_fieldsModel"
import { Offer_avg_fieldsModelSelector } from "./Offer_avg_fieldsModel.base"
import { Offer_max_fieldsModel } from "./Offer_max_fieldsModel"
import { Offer_max_fieldsModelSelector } from "./Offer_max_fieldsModel.base"
import { Offer_min_fieldsModel } from "./Offer_min_fieldsModel"
import { Offer_min_fieldsModelSelector } from "./Offer_min_fieldsModel.base"
import { Offer_stddev_fieldsModel } from "./Offer_stddev_fieldsModel"
import { Offer_stddev_fieldsModelSelector } from "./Offer_stddev_fieldsModel.base"
import { Offer_stddev_pop_fieldsModel } from "./Offer_stddev_pop_fieldsModel"
import { Offer_stddev_pop_fieldsModelSelector } from "./Offer_stddev_pop_fieldsModel.base"
import { Offer_stddev_samp_fieldsModel } from "./Offer_stddev_samp_fieldsModel"
import { Offer_stddev_samp_fieldsModelSelector } from "./Offer_stddev_samp_fieldsModel.base"
import { Offer_sum_fieldsModel } from "./Offer_sum_fieldsModel"
import { Offer_sum_fieldsModelSelector } from "./Offer_sum_fieldsModel.base"
import { Offer_var_pop_fieldsModel } from "./Offer_var_pop_fieldsModel"
import { Offer_var_pop_fieldsModelSelector } from "./Offer_var_pop_fieldsModel.base"
import { Offer_var_samp_fieldsModel } from "./Offer_var_samp_fieldsModel"
import { Offer_var_samp_fieldsModelSelector } from "./Offer_var_samp_fieldsModel.base"
import { Offer_variance_fieldsModel } from "./Offer_variance_fieldsModel"
import { Offer_variance_fieldsModelSelector } from "./Offer_variance_fieldsModel.base"
import { RootStore } from "./index"


/**
 * Offer_aggregate_fieldsBase
 * auto generated base class for the model Offer_aggregate_fieldsModel.
 */
export const Offer_aggregate_fieldsModelBase = MSTGQLObject
  .named('Offer_aggregate_fields')
  .props({
    __typename: types.optional(types.literal("Offer_aggregate_fields"), "Offer_aggregate_fields"),
    avg: types.maybeNull(types.late(() => Offer_avg_fieldsModel)),
    max: types.maybeNull(types.late(() => Offer_max_fieldsModel)),
    min: types.maybeNull(types.late(() => Offer_min_fieldsModel)),
    stddev: types.maybeNull(types.late(() => Offer_stddev_fieldsModel)),
    stddev_pop: types.maybeNull(types.late(() => Offer_stddev_pop_fieldsModel)),
    stddev_samp: types.maybeNull(types.late(() => Offer_stddev_samp_fieldsModel)),
    sum: types.maybeNull(types.late(() => Offer_sum_fieldsModel)),
    var_pop: types.maybeNull(types.late(() => Offer_var_pop_fieldsModel)),
    var_samp: types.maybeNull(types.late(() => Offer_var_samp_fieldsModel)),
    variance: types.maybeNull(types.late(() => Offer_variance_fieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class Offer_aggregate_fieldsModelSelector extends QueryBuilder {
  avg(builder?: string | Offer_avg_fieldsModelSelector | ((selector: Offer_avg_fieldsModelSelector) => Offer_avg_fieldsModelSelector)) { return this.__child(`avg`, Offer_avg_fieldsModelSelector, builder) }
  max(builder?: string | Offer_max_fieldsModelSelector | ((selector: Offer_max_fieldsModelSelector) => Offer_max_fieldsModelSelector)) { return this.__child(`max`, Offer_max_fieldsModelSelector, builder) }
  min(builder?: string | Offer_min_fieldsModelSelector | ((selector: Offer_min_fieldsModelSelector) => Offer_min_fieldsModelSelector)) { return this.__child(`min`, Offer_min_fieldsModelSelector, builder) }
  stddev(builder?: string | Offer_stddev_fieldsModelSelector | ((selector: Offer_stddev_fieldsModelSelector) => Offer_stddev_fieldsModelSelector)) { return this.__child(`stddev`, Offer_stddev_fieldsModelSelector, builder) }
  stddev_pop(builder?: string | Offer_stddev_pop_fieldsModelSelector | ((selector: Offer_stddev_pop_fieldsModelSelector) => Offer_stddev_pop_fieldsModelSelector)) { return this.__child(`stddev_pop`, Offer_stddev_pop_fieldsModelSelector, builder) }
  stddev_samp(builder?: string | Offer_stddev_samp_fieldsModelSelector | ((selector: Offer_stddev_samp_fieldsModelSelector) => Offer_stddev_samp_fieldsModelSelector)) { return this.__child(`stddev_samp`, Offer_stddev_samp_fieldsModelSelector, builder) }
  sum(builder?: string | Offer_sum_fieldsModelSelector | ((selector: Offer_sum_fieldsModelSelector) => Offer_sum_fieldsModelSelector)) { return this.__child(`sum`, Offer_sum_fieldsModelSelector, builder) }
  var_pop(builder?: string | Offer_var_pop_fieldsModelSelector | ((selector: Offer_var_pop_fieldsModelSelector) => Offer_var_pop_fieldsModelSelector)) { return this.__child(`var_pop`, Offer_var_pop_fieldsModelSelector, builder) }
  var_samp(builder?: string | Offer_var_samp_fieldsModelSelector | ((selector: Offer_var_samp_fieldsModelSelector) => Offer_var_samp_fieldsModelSelector)) { return this.__child(`var_samp`, Offer_var_samp_fieldsModelSelector, builder) }
  variance(builder?: string | Offer_variance_fieldsModelSelector | ((selector: Offer_variance_fieldsModelSelector) => Offer_variance_fieldsModelSelector)) { return this.__child(`variance`, Offer_variance_fieldsModelSelector, builder) }
}
export function selectFromOffer_aggregate_fields() {
  return new Offer_aggregate_fieldsModelSelector()
}

export const offer_aggregate_fieldsModelPrimitives = selectFromOffer_aggregate_fields()
