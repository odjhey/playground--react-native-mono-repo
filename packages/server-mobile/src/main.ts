import { createServer } from "@graphql-yoga/node";

import { schema } from "./schema";

function main() {
  const server = createServer({ schema, port: 4000 });
  server.start();
}

main();
