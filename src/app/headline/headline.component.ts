import { Component, OnInit } from '@angular/core';
import { NewsApiServiceService } from '../service/news-api-service.service';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {

  topheading:any = [];

  constructor(private _services:NewsApiServiceService) { }

  ngOnInit(): void {
    this._services.headline().subscribe((result)=>{
      console.log(result)
      this.topheading = result.articles;
    })
  }

}
