import { Product } from "./product";

export class ApiRes {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Product[];

    constructor(page: number, per_page: number, total: number, total_pages: number, products: Product[]) {
    	this.page = page;
    	this.total_pages = total_pages;
    	this.per_page = per_page;
    	this.total = total;
    	this.data = products;
    }
}