import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadlineComponent } from './headline/headline.component';

import { HttpClientModule } from '@angular/common/http';
import { NewsApiServiceService } from './service/news-api-service.service';
import { TechComponent } from './tech/tech.component'

@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    TechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
