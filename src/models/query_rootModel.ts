import { query_rootModelBase } from "./query_rootModel.base"

/* The TypeScript type of an instance of query_rootModel */
export type query_rootModelType = typeof query_rootModel.Type

/* A graphql query fragment builders for query_rootModel */
export { selectFromquery_root, query_rootModelPrimitives, query_rootModelSelector } from "./query_rootModel.base"

/**
 * query_rootModel
 */
export const query_rootModel = query_rootModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
