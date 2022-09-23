import { Component, OnInit } from '@angular/core';
import { NewsApiServiceService } from '../service/news-api-service.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  techHeading:any = [];

  constructor(private _services:NewsApiServiceService) { }

  ngOnInit(): void {
    this._services.techHeading().subscribe((result)=>{
      console.log(result);
      this.techHeading = result.articles;
    })
  }

}
