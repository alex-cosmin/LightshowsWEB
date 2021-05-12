import { Component, OnInit } from '@angular/core';
import {MockedProducts} from '../../utils/mocks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentImg: string;
  currentIndex = 1;
  products = MockedProducts;

  allImages = [];

  constructor() { }

  ngOnInit(): void {
    this.products.forEach(product => this.allImages.push(product.img));
    this.currentImg = `assets/slideshow/${this.allImages[this.currentIndex - 1]}.jpg`;
  }

  changeImage(index: number): void {

    this.currentIndex = this.currentIndex + index;

    if (this.currentIndex > this.allImages.length) {
      this.currentIndex = 1;
    }

    if (this.currentIndex < 1) {
      this.currentIndex = this.allImages.length;
    }

    this.currentImg = `assets/slideshow/${this.allImages[this.currentIndex - 1]}.jpg`;
  }
}
