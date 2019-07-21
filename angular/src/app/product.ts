export class Product {
    id: number;
    name: string;
    color: string;
    pantone_value: string;
    year: number;
    constructor(id: number, name: string, color: string, pantone_value: string, year: number) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.pantone_value = pantone_value;
        this.year = year;
    }
}