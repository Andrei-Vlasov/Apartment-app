export class CreateApartmentDto {
    readonly authorId: number;
    readonly dateCreated: string;
    readonly dealType: number;
    readonly locationData: string;
    readonly price: number;
    readonly title: string;
    readonly roomCount: number;
    readonly space: number;
    readonly livingSpace: number;
    readonly height: number;
    readonly floor: number;
    readonly totalFloors: number;
    readonly yearBuilt: number;
    readonly condition: string;
    readonly heating: string;
    readonly walls: string;
}
