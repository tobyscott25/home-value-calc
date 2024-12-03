import { PropertyType, Property } from "./models.ts";

// Hardcoded properties for now
const properties: Property[] = [
  new Property(
    "123 Fake St",
    PropertyType.House,
    500000,
    600000,
    0,
    2000,
    3,
    2,
    2
  ),
  new Property(
    "456 Real St",
    PropertyType.Apartment,
    400000,
    500000,
    3000,
    1500,
    2,
    1,
    1
  ),
];

export function getProperties(): Property[] {
  return properties;
}
