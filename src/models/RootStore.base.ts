/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions } from "mst-gql"

import { OfferModel } from "./OfferModel"
import { offerModelPrimitives, OfferModelSelector } from "./OfferModel.base"
import { PlayerModel } from "./PlayerModel"
import { playerModelPrimitives, PlayerModelSelector } from "./PlayerModel.base"
import { Offer_aggregateModel } from "./Offer_aggregateModel"
import { offer_aggregateModelPrimitives, Offer_aggregateModelSelector } from "./Offer_aggregateModel.base"
import { Offer_aggregate_fieldsModel } from "./Offer_aggregate_fieldsModel"
import { offer_aggregate_fieldsModelPrimitives, Offer_aggregate_fieldsModelSelector } from "./Offer_aggregate_fieldsModel.base"
import { Offer_avg_fieldsModel } from "./Offer_avg_fieldsModel"
import { offer_avg_fieldsModelPrimitives, Offer_avg_fieldsModelSelector } from "./Offer_avg_fieldsModel.base"
import { Offer_max_fieldsModel } from "./Offer_max_fieldsModel"
import { offer_max_fieldsModelPrimitives, Offer_max_fieldsModelSelector } from "./Offer_max_fieldsModel.base"
import { Offer_min_fieldsModel } from "./Offer_min_fieldsModel"
import { offer_min_fieldsModelPrimitives, Offer_min_fieldsModelSelector } from "./Offer_min_fieldsModel.base"
import { Offer_stddev_fieldsModel } from "./Offer_stddev_fieldsModel"
import { offer_stddev_fieldsModelPrimitives, Offer_stddev_fieldsModelSelector } from "./Offer_stddev_fieldsModel.base"
import { Offer_stddev_pop_fieldsModel } from "./Offer_stddev_pop_fieldsModel"
import { offer_stddev_pop_fieldsModelPrimitives, Offer_stddev_pop_fieldsModelSelector } from "./Offer_stddev_pop_fieldsModel.base"
import { Offer_stddev_samp_fieldsModel } from "./Offer_stddev_samp_fieldsModel"
import { offer_stddev_samp_fieldsModelPrimitives, Offer_stddev_samp_fieldsModelSelector } from "./Offer_stddev_samp_fieldsModel.base"
import { Offer_sum_fieldsModel } from "./Offer_sum_fieldsModel"
import { offer_sum_fieldsModelPrimitives, Offer_sum_fieldsModelSelector } from "./Offer_sum_fieldsModel.base"
import { Offer_var_pop_fieldsModel } from "./Offer_var_pop_fieldsModel"
import { offer_var_pop_fieldsModelPrimitives, Offer_var_pop_fieldsModelSelector } from "./Offer_var_pop_fieldsModel.base"
import { Offer_var_samp_fieldsModel } from "./Offer_var_samp_fieldsModel"
import { offer_var_samp_fieldsModelPrimitives, Offer_var_samp_fieldsModelSelector } from "./Offer_var_samp_fieldsModel.base"
import { Offer_variance_fieldsModel } from "./Offer_variance_fieldsModel"
import { offer_variance_fieldsModelPrimitives, Offer_variance_fieldsModelSelector } from "./Offer_variance_fieldsModel.base"
import { Player_aggregateModel } from "./Player_aggregateModel"
import { player_aggregateModelPrimitives, Player_aggregateModelSelector } from "./Player_aggregateModel.base"
import { Player_aggregate_fieldsModel } from "./Player_aggregate_fieldsModel"
import { player_aggregate_fieldsModelPrimitives, Player_aggregate_fieldsModelSelector } from "./Player_aggregate_fieldsModel.base"
import { Player_avg_fieldsModel } from "./Player_avg_fieldsModel"
import { player_avg_fieldsModelPrimitives, Player_avg_fieldsModelSelector } from "./Player_avg_fieldsModel.base"
import { Player_max_fieldsModel } from "./Player_max_fieldsModel"
import { player_max_fieldsModelPrimitives, Player_max_fieldsModelSelector } from "./Player_max_fieldsModel.base"
import { Player_min_fieldsModel } from "./Player_min_fieldsModel"
import { player_min_fieldsModelPrimitives, Player_min_fieldsModelSelector } from "./Player_min_fieldsModel.base"
import { Player_stddev_fieldsModel } from "./Player_stddev_fieldsModel"
import { player_stddev_fieldsModelPrimitives, Player_stddev_fieldsModelSelector } from "./Player_stddev_fieldsModel.base"
import { Player_stddev_pop_fieldsModel } from "./Player_stddev_pop_fieldsModel"
import { player_stddev_pop_fieldsModelPrimitives, Player_stddev_pop_fieldsModelSelector } from "./Player_stddev_pop_fieldsModel.base"
import { Player_stddev_samp_fieldsModel } from "./Player_stddev_samp_fieldsModel"
import { player_stddev_samp_fieldsModelPrimitives, Player_stddev_samp_fieldsModelSelector } from "./Player_stddev_samp_fieldsModel.base"
import { Player_sum_fieldsModel } from "./Player_sum_fieldsModel"
import { player_sum_fieldsModelPrimitives, Player_sum_fieldsModelSelector } from "./Player_sum_fieldsModel.base"
import { Player_var_pop_fieldsModel } from "./Player_var_pop_fieldsModel"
import { player_var_pop_fieldsModelPrimitives, Player_var_pop_fieldsModelSelector } from "./Player_var_pop_fieldsModel.base"
import { Player_var_samp_fieldsModel } from "./Player_var_samp_fieldsModel"
import { player_var_samp_fieldsModelPrimitives, Player_var_samp_fieldsModelSelector } from "./Player_var_samp_fieldsModel.base"
import { Player_variance_fieldsModel } from "./Player_variance_fieldsModel"
import { player_variance_fieldsModelPrimitives, Player_variance_fieldsModelSelector } from "./Player_variance_fieldsModel.base"
import { Offer_mutation_responseModel } from "./Offer_mutation_responseModel"
import { offer_mutation_responseModelPrimitives, Offer_mutation_responseModelSelector } from "./Offer_mutation_responseModel.base"
import { Player_mutation_responseModel } from "./Player_mutation_responseModel"
import { player_mutation_responseModelPrimitives, Player_mutation_responseModelSelector } from "./Player_mutation_responseModel.base"

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['Offer', () => OfferModel], ['Player', () => PlayerModel], ['Offer_aggregate', () => Offer_aggregateModel], ['Offer_aggregate_fields', () => Offer_aggregate_fieldsModel], ['Offer_avg_fields', () => Offer_avg_fieldsModel], ['Offer_max_fields', () => Offer_max_fieldsModel], ['Offer_min_fields', () => Offer_min_fieldsModel], ['Offer_stddev_fields', () => Offer_stddev_fieldsModel], ['Offer_stddev_pop_fields', () => Offer_stddev_pop_fieldsModel], ['Offer_stddev_samp_fields', () => Offer_stddev_samp_fieldsModel], ['Offer_sum_fields', () => Offer_sum_fieldsModel], ['Offer_var_pop_fields', () => Offer_var_pop_fieldsModel], ['Offer_var_samp_fields', () => Offer_var_samp_fieldsModel], ['Offer_variance_fields', () => Offer_variance_fieldsModel], ['Player_aggregate', () => Player_aggregateModel], ['Player_aggregate_fields', () => Player_aggregate_fieldsModel], ['Player_avg_fields', () => Player_avg_fieldsModel], ['Player_max_fields', () => Player_max_fieldsModel], ['Player_min_fields', () => Player_min_fieldsModel], ['Player_stddev_fields', () => Player_stddev_fieldsModel], ['Player_stddev_pop_fields', () => Player_stddev_pop_fieldsModel], ['Player_stddev_samp_fields', () => Player_stddev_samp_fieldsModel], ['Player_sum_fields', () => Player_sum_fieldsModel], ['Player_var_pop_fields', () => Player_var_pop_fieldsModel], ['Player_var_samp_fields', () => Player_var_samp_fieldsModel], ['Player_variance_fields', () => Player_variance_fieldsModel], ['Offer_mutation_response', () => Offer_mutation_responseModel], ['Player_mutation_response', () => Player_mutation_responseModel]], ['Player', 'Offer']))
  .props({
    players: types.optional(types.map(types.late(() => PlayerModel)), {}),
    offers: types.optional(types.map(types.late(() => OfferModel)), {})
  })
  .actions(self => ({
    queryOffer(variables: { distinct_on: any[], limit: number | undefined, offset: number | undefined, order_by: Offer_order_by[], where: Offer_bool_exp | undefined }, resultSelector: string | ((qb: OfferModelSelector) => OfferModelSelector) = offerModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<typeof OfferModel.Type[]>(`query Offer($distinct_on: [Offer_select_column!], $limit: Int, $offset: Int, $order_by: [Offer_order_by!], $where: Offer_bool_exp) { Offer(distinct_on: $distinct_on, limit: $limit, offset: $offset, order_by: $order_by, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OfferModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryOffer_aggregate(variables: { distinct_on: any[], limit: number | undefined, offset: number | undefined, order_by: Offer_order_by[], where: Offer_bool_exp | undefined }, resultSelector: string | ((qb: Offer_aggregateModelSelector) => Offer_aggregateModelSelector) = offer_aggregateModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<typeof Offer_aggregateModel.Type>(`query Offer_aggregate($distinct_on: [Offer_select_column!], $limit: Int, $offset: Int, $order_by: [Offer_order_by!], $where: Offer_bool_exp) { Offer_aggregate(distinct_on: $distinct_on, limit: $limit, offset: $offset, order_by: $order_by, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new Offer_aggregateModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryOffer_by_pk(variables: { id: string }, resultSelector: string | ((qb: OfferModelSelector) => OfferModelSelector) = offerModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<typeof OfferModel.Type>(`query Offer_by_pk($id: ID!) { Offer_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new OfferModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryPlayer(variables: { distinct_on: any[], limit: number | undefined, offset: number | undefined, order_by: Player_order_by[], where: Player_bool_exp | undefined }, resultSelector: string | ((qb: PlayerModelSelector) => PlayerModelSelector) = playerModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<typeof PlayerModel.Type[]>(`query Player($distinct_on: [Player_select_column!], $limit: Int, $offset: Int, $order_by: [Player_order_by!], $where: Player_bool_exp) { Player(distinct_on: $distinct_on, limit: $limit, offset: $offset, order_by: $order_by, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new PlayerModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryPlayer_aggregate(variables: { distinct_on: any[], limit: number | undefined, offset: number | undefined, order_by: Player_order_by[], where: Player_bool_exp | undefined }, resultSelector: string | ((qb: Player_aggregateModelSelector) => Player_aggregateModelSelector) = player_aggregateModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<typeof Player_aggregateModel.Type>(`query Player_aggregate($distinct_on: [Player_select_column!], $limit: Int, $offset: Int, $order_by: [Player_order_by!], $where: Player_bool_exp) { Player_aggregate(distinct_on: $distinct_on, limit: $limit, offset: $offset, order_by: $order_by, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new Player_aggregateModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryPlayer_by_pk(variables: { id: string }, resultSelector: string | ((qb: PlayerModelSelector) => PlayerModelSelector) = playerModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<typeof PlayerModel.Type>(`query Player_by_pk($id: ID!) { Player_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new PlayerModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    mutateDelete_Offer(variables: { where: Offer_bool_exp }, resultSelector: string | ((qb: Offer_mutation_responseModelSelector) => Offer_mutation_responseModelSelector) = offer_mutation_responseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<typeof Offer_mutation_responseModel.Type>(`mutation delete_Offer($where: Offer_bool_exp!) { delete_Offer(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new Offer_mutation_responseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDelete_Player(variables: { where: Player_bool_exp }, resultSelector: string | ((qb: Player_mutation_responseModelSelector) => Player_mutation_responseModelSelector) = player_mutation_responseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<typeof Player_mutation_responseModel.Type>(`mutation delete_Player($where: Player_bool_exp!) { delete_Player(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new Player_mutation_responseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateInsert_Offer(variables: { objects: Offer_insert_input[], on_conflict: Offer_on_conflict | undefined }, resultSelector: string | ((qb: Offer_mutation_responseModelSelector) => Offer_mutation_responseModelSelector) = offer_mutation_responseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<typeof Offer_mutation_responseModel.Type>(`mutation insert_Offer($objects: [Offer_insert_input!]!, $on_conflict: Offer_on_conflict) { insert_Offer(objects: $objects, on_conflict: $on_conflict) {
        ${typeof resultSelector === "function" ? resultSelector(new Offer_mutation_responseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateInsert_Player(variables: { objects: Player_insert_input[], on_conflict: Player_on_conflict | undefined }, resultSelector: string | ((qb: Player_mutation_responseModelSelector) => Player_mutation_responseModelSelector) = player_mutation_responseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<typeof Player_mutation_responseModel.Type>(`mutation insert_Player($objects: [Player_insert_input!]!, $on_conflict: Player_on_conflict) { insert_Player(objects: $objects, on_conflict: $on_conflict) {
        ${typeof resultSelector === "function" ? resultSelector(new Player_mutation_responseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdate_Offer(variables: { _inc: Offer_inc_input | undefined, _set: Offer_set_input | undefined, where: Offer_bool_exp }, resultSelector: string | ((qb: Offer_mutation_responseModelSelector) => Offer_mutation_responseModelSelector) = offer_mutation_responseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<typeof Offer_mutation_responseModel.Type>(`mutation update_Offer($_inc: Offer_inc_input, $_set: Offer_set_input, $where: Offer_bool_exp!) { update_Offer(_inc: $_inc, _set: $_set, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new Offer_mutation_responseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdate_Player(variables: { _inc: Player_inc_input | undefined, _set: Player_set_input | undefined, where: Player_bool_exp }, resultSelector: string | ((qb: Player_mutation_responseModelSelector) => Player_mutation_responseModelSelector) = player_mutation_responseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<typeof Player_mutation_responseModel.Type>(`mutation update_Player($_inc: Player_inc_input, $_set: Player_set_input, $where: Player_bool_exp!) { update_Player(_inc: $_inc, _set: $_set, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new Player_mutation_responseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    subscribeOffer(variables: { distinct_on: any[], limit: number | undefined, offset: number | undefined, order_by: Offer_order_by[], where: Offer_bool_exp | undefined }, resultSelector: string | ((qb: OfferModelSelector) => OfferModelSelector) = offerModelPrimitives.toString(), onData?: (item: any) => void) {
      return self.subscribe<typeof OfferModel.Type[]>(`subscription Offer($distinct_on: [Offer_select_column!], $limit: Int, $offset: Int, $order_by: [Offer_order_by!], $where: Offer_bool_exp) { Offer(distinct_on: $distinct_on, limit: $limit, offset: $offset, order_by: $order_by, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OfferModelSelector()).toString() : resultSelector}
      } }`, variables, onData)
    },
    subscribeOffer_aggregate(variables: { distinct_on: any[], limit: number | undefined, offset: number | undefined, order_by: Offer_order_by[], where: Offer_bool_exp | undefined }, resultSelector: string | ((qb: Offer_aggregateModelSelector) => Offer_aggregateModelSelector) = offer_aggregateModelPrimitives.toString(), onData?: (item: any) => void) {
      return self.subscribe<typeof Offer_aggregateModel.Type>(`subscription Offer_aggregate($distinct_on: [Offer_select_column!], $limit: Int, $offset: Int, $order_by: [Offer_order_by!], $where: Offer_bool_exp) { Offer_aggregate(distinct_on: $distinct_on, limit: $limit, offset: $offset, order_by: $order_by, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new Offer_aggregateModelSelector()).toString() : resultSelector}
      } }`, variables, onData)
    },
    subscribeOffer_by_pk(variables: { id: string }, resultSelector: string | ((qb: OfferModelSelector) => OfferModelSelector) = offerModelPrimitives.toString(), onData?: (item: any) => void) {
      return self.subscribe<typeof OfferModel.Type>(`subscription Offer_by_pk($id: ID!) { Offer_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new OfferModelSelector()).toString() : resultSelector}
      } }`, variables, onData)
    },
    subscribePlayer(variables: { distinct_on: any[], limit: number | undefined, offset: number | undefined, order_by: Player_order_by[], where: Player_bool_exp | undefined }, resultSelector: string | ((qb: PlayerModelSelector) => PlayerModelSelector) = playerModelPrimitives.toString(), onData?: (item: any) => void) {
      return self.subscribe<typeof PlayerModel.Type[]>(`subscription Player($distinct_on: [Player_select_column!], $limit: Int, $offset: Int, $order_by: [Player_order_by!], $where: Player_bool_exp) { Player(distinct_on: $distinct_on, limit: $limit, offset: $offset, order_by: $order_by, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new PlayerModelSelector()).toString() : resultSelector}
      } }`, variables, onData)
    },
    subscribePlayer_aggregate(variables: { distinct_on: any[], limit: number | undefined, offset: number | undefined, order_by: Player_order_by[], where: Player_bool_exp | undefined }, resultSelector: string | ((qb: Player_aggregateModelSelector) => Player_aggregateModelSelector) = player_aggregateModelPrimitives.toString(), onData?: (item: any) => void) {
      return self.subscribe<typeof Player_aggregateModel.Type>(`subscription Player_aggregate($distinct_on: [Player_select_column!], $limit: Int, $offset: Int, $order_by: [Player_order_by!], $where: Player_bool_exp) { Player_aggregate(distinct_on: $distinct_on, limit: $limit, offset: $offset, order_by: $order_by, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new Player_aggregateModelSelector()).toString() : resultSelector}
      } }`, variables, onData)
    },
    subscribePlayer_by_pk(variables: { id: string }, resultSelector: string | ((qb: PlayerModelSelector) => PlayerModelSelector) = playerModelPrimitives.toString(), onData?: (item: any) => void) {
      return self.subscribe<typeof PlayerModel.Type>(`subscription Player_by_pk($id: ID!) { Player_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new PlayerModelSelector()).toString() : resultSelector}
      } }`, variables, onData)
    },    
  }))
