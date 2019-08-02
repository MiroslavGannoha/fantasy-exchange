/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum conflict_action {
  ignore="ignore",
update="update"
}

/**
* conflict_action
*/
export const conflict_actionEnum = types.enumeration("conflict_action", [
        "ignore",
  "update",
      ])
