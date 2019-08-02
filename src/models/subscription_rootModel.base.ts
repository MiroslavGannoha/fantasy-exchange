/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { RootStore } from "./index"


/**
 * subscription_rootBase
 * auto generated base class for the model subscription_rootModel.
 */
export const subscription_rootModelBase = MSTGQLObject
  .named('subscription_root')
  .props({
    __typename: types.optional(types.literal("subscription_root"), "subscription_root"),

  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class subscription_rootModelSelector extends QueryBuilder {
}
export function selectFromsubscription_root() {
  return new subscription_rootModelSelector()
}

export const subscription_rootModelPrimitives = selectFromsubscription_root()
