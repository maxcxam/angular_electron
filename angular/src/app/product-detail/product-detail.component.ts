import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { Product } from "../product";
import { Router  , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product(-1,'No Product', '#000', '12', 1970);
  constructor(private productService: ProductService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.productService.getProduct(this.route.snapshot.params['id']).subscribe((product: any) =>{
      console.log(product.data);
      this.product = product.data;
    })
  }
}