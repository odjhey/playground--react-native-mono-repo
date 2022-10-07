import { types, Instance } from "mobx-state-tree";

export const StoreModel = types
  .model("Store", {
    value: types.string,
  })
  .actions((self) => {
    return {};
  });

export interface Store extends Instance<typeof StoreModel> {}
