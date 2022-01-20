import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent implements OnInit {


  isLiked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  clickButton = () => {
    if (this.isLiked)
      this.isLiked = false;
    else
      this.isLiked = true;
    
  }
}
