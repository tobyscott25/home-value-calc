import { sortPropertiesByValue } from "./utility.ts";
import { getProperties } from "./upstream.ts";

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const properties = getProperties();

  sortPropertiesByValue(properties).forEach((property) => {
    console.log(property.getPrintLine());
  });
}
