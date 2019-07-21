import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL: string = "https://reqres.in/api/";
  

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get('https://reqres.in/api/products/?per_page=1000')
  }

  getProduct(productId) {
  	console.log(productId);
    return this.httpClient.get(`https://reqres.in/api/products/${productId}`)
  }
}