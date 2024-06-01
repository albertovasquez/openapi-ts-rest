import { type OpenAPIObject } from "openapi3-ts/oas30";

import { makeRefObjectResolvers } from "./makeRefObjectResolvers";
import { processObjectSchemas } from "./processObjectSchemas";

export interface Context {
  exportedComponentSchemasMap: ReturnType<
    typeof processObjectSchemas
  >["exportedComponentSchemasMap"];
  openAPIDoc: OpenAPIObject;
  resolveObject: ReturnType<typeof makeRefObjectResolvers>["resolveObject"];
  resolveRef: ReturnType<typeof makeRefObjectResolvers>["resolveRef"];
}

export function generateContext(openAPIDoc: OpenAPIObject): Context {
  const { resolveObject, resolveRef } = makeRefObjectResolvers(openAPIDoc);
  const { exportedComponentSchemasMap } = processObjectSchemas(openAPIDoc, resolveRef);

  return {
    exportedComponentSchemasMap,
    openAPIDoc,
    resolveObject,
    resolveRef,
  };
}
