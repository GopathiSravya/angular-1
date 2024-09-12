import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {

  @Input() rating: number | undefined ;
  @Input() commonts : string | undefined ;


  @Output() ratingChange = new EventEmitter<number>();

  updateRating(newRating: number) {
    this.rating = newRating;
    this.ratingChange.emit(this.rating);
  }
}
