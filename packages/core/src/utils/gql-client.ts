/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { Client } from "@urql/core";

export const makeClient = (client: Client) => {
  const requestMutation = (query: string, variables: any) => {
    return client.mutation(query, variables).toPromise();
  };
  const requestQuery = (query: string, variables: any) => {
    return client.query(query, variables).toPromise();
  };

  // return (): RequestHandler => {
  return () => {
    return {
      request: (query: string, variables: any) => {
        if (query.startsWith("mutation")) {
          return requestMutation(query, variables).then(
            (d) => {
              if (d.error) {
                console.log("err in body(M)", d.error);
                console.log(
                  "err in body(M)",
                  d.error.graphQLErrors,
                  d.error.networkError
                );
                throw d.error;
              }
              return d.data;
            },
            (reason: string) => {
              console.log("err in catch block(M)", reason);
              throw new Error(reason);
            }
          );
          // TODO: handle errors and extensions
        } else {
          return requestQuery(query, variables).then(
            (d) => {
              if (d.error) {
                console.log("err in body(Q)", d.error);
                console.log(
                  "err in body(Q)",
                  d.error.graphQLErrors,
                  d.error.networkError
                );
                throw d.error;
              }
              return d.data;
            },
            (reason) => {
              console.log("err in catch block(Q)", reason);
              throw new Error(reason);
            }
          );
          // TODO: handle errors and extensions
        }
      },
    };
  };
};
