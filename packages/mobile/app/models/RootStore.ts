import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { StoreModel } from "core"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore", {
  core: StoreModel,
  a: types.string,
})
/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
