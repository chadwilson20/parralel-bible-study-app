import { Component, OnInit } from '@angular/core';
import { BibleVersionsService } from '../bible-versions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bibleVersions;

  constructor(private bibleVersionsService: BibleVersionsService) { }

  ngOnInit(): void {
    this.bibleVersions = this.bibleVersionsService.getBibleVersions();
  }

}
