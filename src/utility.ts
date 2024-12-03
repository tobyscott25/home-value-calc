import { Property } from "./models.ts";

export function sortPropertiesByValue(properties: Property[]): Property[] {
  // Create a map of property values
  const valueMap = new Map<Property, number>();

  // Populate the map
  properties.forEach((property) => {
    valueMap.set(property, property.valuate());
  });

  // Sort by value
  return properties.sort((a, b) => {
    return (valueMap.get(b) ?? 0) - (valueMap.get(a) ?? 0);
  });
}
