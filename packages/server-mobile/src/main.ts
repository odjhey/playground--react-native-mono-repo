import { createServer } from "@graphql-yoga/node";

import { schema } from "./schema";
import { createContext } from "./context";

function main() {
  const server = createServer({ schema, port: 4000, context: createContext });
  server.start();
}

main();
