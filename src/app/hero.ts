export class Hero {
    id: number = 0;
    name: string = '';
    superpower: string = '';
    address: string = '';


    constructor(property?: Hero) {
        if (property) {
            this.id = property.id || 0;
            this.name = property.name || '';
            this.superpower = property.superpower || '';
            this.address = property.address || '';
        }
    }
}
