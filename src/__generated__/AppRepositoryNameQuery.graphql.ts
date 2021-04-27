/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AppRepositoryNameQueryVariables = {};
export type AppRepositoryNameQueryResponse = {
    readonly repository: {
        readonly name: string;
    } | null;
};
export type AppRepositoryNameQuery = {
    readonly response: AppRepositoryNameQueryResponse;
    readonly variables: AppRepositoryNameQueryVariables;
};



/*
query AppRepositoryNameQuery {
  repository(owner: "Alpakash", name: "Laravel") {
    name
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "Laravel"
  },
  {
    "kind": "Literal",
    "name": "owner",
    "value": "Alpakash"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": "repository(name:\"Laravel\",owner:\"Alpakash\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "repository(name:\"Laravel\",owner:\"Alpakash\")"
      }
    ]
  },
  "params": {
    "cacheID": "1879c9e337b7c5f7ed1e714395121d22",
    "id": null,
    "metadata": {},
    "name": "AppRepositoryNameQuery",
    "operationKind": "query",
    "text": "query AppRepositoryNameQuery {\n  repository(owner: \"Alpakash\", name: \"Laravel\") {\n    name\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'dd2ec64ef7173084f5d817286bf44928';
export default node;
