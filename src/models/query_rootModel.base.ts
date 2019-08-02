/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { RootStore } from "./index"


/**
 * query_rootBase
 * auto generated base class for the model query_rootModel.
 */
export const query_rootModelBase = MSTGQLObject
  .named('query_root')
  .props({
    __typename: types.optional(types.literal("query_root"), "query_root"),

  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class query_rootModelSelector extends QueryBuilder {
}
export function selectFromquery_root() {
  return new query_rootModelSelector()
}

export const query_rootModelPrimitives = selectFromquery_root()
