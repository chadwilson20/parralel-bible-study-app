import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BibleVersionsService {

  getBibleVersions() {
    return this.http.get('/assets/bible-versions.json');
  }

  constructor(private http: HttpClient) { }
}
