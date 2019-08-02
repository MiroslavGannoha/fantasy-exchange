import { mutation_rootModelBase } from "./mutation_rootModel.base"

/* The TypeScript type of an instance of mutation_rootModel */
export type mutation_rootModelType = typeof mutation_rootModel.Type

/* A graphql query fragment builders for mutation_rootModel */
export { selectFrommutation_root, mutation_rootModelPrimitives, mutation_rootModelSelector } from "./mutation_rootModel.base"

/**
 * mutation_rootModel
 */
export const mutation_rootModel = mutation_rootModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
