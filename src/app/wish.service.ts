import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { WishItem } from '../shared/models/wishItem';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishService {
  constructor(private http: HttpClient) {}

  private getStandardOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  getWishes() {
    const options = this.getStandardOptions();

    // w ramach ćwiczeń
    options.params = new HttpParams({
      fromObject: {
        format: 'json',
      },
    });

    return this.http
      .get('assets/wishes1.json', options)
      .pipe(catchError(this.handleError));

    // this.http.post(url, body, options)
  }

  // tylko dla nas w celach ćwiczebnych, nie do prawidziwej aplikacji
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error(
        'There is an issue with the client or network:',
        error.error,
      );
    } else {
      console.log('Server-Side error:', error.error);
    }

    return throwError(
      () =>
        new Error('Cannot retrive wishes from the server. Please try again.'),
    );
  }

  private addWish(wish: WishItem) {
    const options = this.getStandardOptions();

    options.headers = options.headers.set(
      'Authorization',
      'value-need-for-authorization',
    );

    this.http.post('assets/wishes.json', wish, options);
  }
}
