import { Component, Input, OnInit } from '@angular/core';
import { StarRating } from './models/star-rating';

@Component({
  selector: 'star-rating',
  templateUrl: 'star-rating.component.html',
  styleUrls: ['star-rating.component.scss'
  ]
})
export class StarRatingComponent implements OnInit {

  @Input() starRating: StarRating[];
  // @Input() starCount: number;
  @Input() labelVotes: string = 'votes'
  @Input() color: string = '#FABB05';
  @Input() flexDirection: string = 'column';

  constructor() { }

  ngOnInit() {
  }

  totalRating() {
    let sum = 0;
    
    this.starRating.forEach(e => {
      
      sum += e.count;
    });
    

    return sum;
  }

  averageRating() {
    let sum = 0, sumVotes = 0;
    this.starRating.forEach((e: any, index: number) => {
      sum += e.rating * e.count;
      sumVotes += e.count;

      e.percentageYellow = Math.trunc((e.count / this.totalRating()) * 100);
      e.percentageGray = Math.abs(Math.trunc(((e.count / this.totalRating()) * 100) - 100))
      
    })

    
    return (sum / sumVotes);
  }

  integerValue() {
    return Math.trunc(this.averageRating());
  }
}
