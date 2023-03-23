import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()

export class AppComponent {

  constructor(private http: HttpClient) { }

  booksUrl = 'assets/books.json';
  
  

getConfig() {
  return this.http.get<AppComponent>(this.booksUrl);
}


}