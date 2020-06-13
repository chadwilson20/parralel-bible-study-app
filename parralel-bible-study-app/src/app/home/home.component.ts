import { Component, OnInit } from '@angular/core';
import { BibleVersionsService } from '../bible-versions.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bibleVersions;
  bibleAPIUrl;

  constructor(private bibleVersionsService: BibleVersionsService) { }

  ngOnInit(): void {
    this.bibleVersions = this.bibleVersionsService.getBibleVersions();
    this.bibleAPIUrl = "https://cors-anywhere.herokuapp.com/https://getbible.net/json?passage=";
  }

  onSubmit(homeForm: NgForm): void {
    var bibleVerse: string = homeForm.value["biblePassage"];
    var firstBibleVersion: string = homeForm.value["firstBibleVersion"];
    var secondBibleVersion: string = homeForm.value["secondBibleVersion"];
    var firstEndpoint: string = this.bibleAPIUrl + bibleVerse + "&version=" + firstBibleVersion;
    this.bibleVersionsService.getBiblePassage(firstEndpoint).subscribe(
      event => console.log(event));
  }

}
