import { types, Instance } from "mobx-state-tree";
import { RootStore } from "./models";

export const StoreModel = types
  .model("Store", {
    value: types.string,
    raws: RootStore,
  })
  .actions((_self) => {
    return {};
  });

export interface Store extends Instance<typeof StoreModel> {}
