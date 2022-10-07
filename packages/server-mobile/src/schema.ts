import { GraphQLContext } from "./context";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { readFileSync } from "node:fs";
import { Resolvers } from "../generated/resolvers-types";
import path from "node:path";

const typeDefs = readFileSync(path.join(__dirname, "./schema.graphql"), "utf8");

const resolvers: Resolvers = {
  Query: {
    hello: () => "Hello World!",
    outlets: (parent: any, _args: any, context: GraphQLContext) => {
      return context.prisma.outlet.findMany().then((outlets) =>
        outlets.map((o) => ({
          id: `${o.id}`,
          name: o.name,
          description: o.description,
          createdAt: o.createdAt,
          updatedAt: o.updatedAt,
        }))
      );
    },
  },
};

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefs],
});
