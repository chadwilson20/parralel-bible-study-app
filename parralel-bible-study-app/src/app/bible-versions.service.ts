import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BibleVersionsService {

  getBibleVersions() {
    return this.http.get('/assets/bible-versions.json');
  }

  getBiblePassage(bibleEndpoint: string) {
    return this.http.get(bibleEndpoint, {responseType: 'text'});
  }

  constructor(private http: HttpClient) { }
}
