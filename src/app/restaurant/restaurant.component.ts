import { Component } from '@angular/core';
import { Restaurant } from '../model/Restaurant';
import { Address } from '../model/Address';
import { Rating } from '../model/Rating';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {

  restaurant = new Restaurant('',new Address('','','','',''),new Rating(0,''));

  
  
  updateAddress(newAddress: Address) {
    this.restaurant.address = newAddress;
  }

  updateRating(newRating: number) {
    this.restaurant.rating.rating = newRating;
  }

  addRestaurant(){
    console.log('from addRestaurant' + JSON.stringify(this.restaurant)) 

  }
}
