import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WishItem } from '../shared/models/wishItem';

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

    return this.http.get('assets/wishes.json', options);

    // this.http.post(url, body, options)
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
