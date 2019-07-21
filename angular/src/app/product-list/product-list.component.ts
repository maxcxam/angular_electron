import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { ApiRes } from "../apires";
import { Product } from "../product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }
  ngOnInit() {
    /*this.productService.getProducts().subscribe((products: Product[])=>{
      this.products = products;
      console.log(products);
    })*/

     this.productService.getProducts().subscribe((apires: ApiRes)=>{
      this.products = apires.data;
      console.log(this.products);
    })

  }
}