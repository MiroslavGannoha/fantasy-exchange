/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLObject, QueryBuilder } from "mst-gql"
import { RootStore } from "./index"


/**
 * mutation_rootBase
 * auto generated base class for the model mutation_rootModel.
 */
export const mutation_rootModelBase = MSTGQLObject
  .named('mutation_root')
  .props({
    __typename: types.optional(types.literal("mutation_root"), "mutation_root"),

  })
  .views(self => ({
    get store() {
      return self.__getStore<typeof RootStore.Type>()
    }
  }))

export class mutation_rootModelSelector extends QueryBuilder {
}
export function selectFrommutation_root() {
  return new mutation_rootModelSelector()
}

export const mutation_rootModelPrimitives = selectFrommutation_root()
