/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OutletBase
 * auto generated base class for the model OutletModel.
 */
export const OutletModelBase = ModelBase
  .named('Outlet')
  .props({
    __typename: types.optional(types.literal("Outlet"), "Outlet"),
    id: types.identifier,
    name: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OutletModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromOutlet() {
  return new OutletModelSelector()
}

export const outletModelPrimitives = selectFromOutlet().name
