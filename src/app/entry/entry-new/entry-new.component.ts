import { Component, OnInit } from '@angular/core';
import { IUserInfo } from '../subject-info/subject-info.model';
@Component({
  selector: 'app-entry-new',
  templateUrl: './entry-new.component.html',
  styleUrls: ['./entry-new.component.css']
})
export class EntryNewComponent implements OnInit {
  public currentSubject: IUserInfo;
  currentSubjectId: number;

  constructor() { }

  ngOnInit() {

    // this.currentSubject.id = 0;
    // this.currentSubject.entryDate = new Date();
    // this.currentSubject.hours = 0;
    // this.currentSubject.subjectId = "";
    // this.currentSubject.weight = 0;
  }

  onSubmit() {

  }

  onCancel() {

  }

}
