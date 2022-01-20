import { NasaService } from './../nasa.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Image from '../Image';

@Component({
  selector: 'app-spacetagram',
  templateUrl: './spacetagram.component.html',
  styleUrls: ['./spacetagram.component.css']
})
export class SpacetagramComponent implements OnInit, OnDestroy {

  //properties
  @Input() data: Array<any> = [];
  images: Set<Image> = new Set<Image>();
  subscription: Subscription | undefined;
  warning: string = "";
  loading: boolean = false;




  constructor(private nasaData: NasaService) { }

  ngOnInit(): void {
    this.loading = true;
    this.subscription = this.nasaData.getImages().subscribe(nData => {
      this.loading = false;
      //whole returned data -> this.data
      this.data = nData as [];
      
      // filter to get only required info
      for (let i = 0; i < 100/*this.data.length*/; i++) {
        let image = new Image();
        image.imgUrl = this.data[i].hdurl;
        image.title = this.data[i].title;
        image.date = this.data[i].date;
        image.description = this.data[i].explanation;
        this.images.add(image);
      }
      
      console.log(this.images);

    },(err:any)=>{
      this.warning = err.error.message;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }


}