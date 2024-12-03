export enum PropertyType {
  House = "House",
  Apartment = "Apartment",
  Unit = "Unit",
  Studio = "Studio",
}

export class Property {
  constructor(
    public address: string,
    public type: PropertyType,
    public askingMin: number,
    public askingMax: number,
    public annualBodyCorpFee: number,
    public annualCouncilRates: number,
    public bedroomCount: number,
    public bathroomCount: number,
    public parkingSpaceCount: number,
    public hasBackyard: boolean = false
  ) {}

  valuate(): number {
    const BED_AVG_VALUE = 100;
    const BATH_AVG_VALUE = 50;
    const PARK_AVG_VALUE = 50;
    const BACKYARD_AVG_VALUE = 100;

    let value = 0;

    value += this.bedroomCount * BED_AVG_VALUE;
    value += this.bathroomCount * BATH_AVG_VALUE;
    value += this.parkingSpaceCount * PARK_AVG_VALUE;
    value += this.hasBackyard ? BACKYARD_AVG_VALUE : 0;

    return value;
  }

  getPrintLine(): string {
    return `${this.address} (${this.type}): $${this.askingMin}-$${this.askingMax}. Bedrooms: ${this.bedroomCount}, Bathrooms: ${this.bathroomCount}, Parking: ${this.parkingSpaceCount}`;
  }
}
