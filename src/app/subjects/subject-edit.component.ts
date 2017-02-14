import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { Subject } from './subject';
import { SubjectsService } from './subjects.service';
import { Site } from '../sites/site';
import { SitesService } from '../sites/sites.service';

@Component({
  selector: 'app-subject-edit',
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.css']
})
export class SubjectEditComponent implements OnInit {
  id: string;
  subject: Subject;
  sites: Site[] = new Array();

  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _sitesService: SitesService,
    private _subjectsService: SubjectsService) { }

  ngOnInit() {
    this._activatedRoute.data.subscribe(val => {
      console.log("val:", val);
      this.subject = val['subjectEdit'];
      this.subject.startDate = this.parseDate(this.subject.startDate).toDateString();
      console.log("subject:", this.subject);
    });
    this._sitesService.getSites().subscribe((res) => {
      console.log("sites res:", res);
      this.sites = res;
    })

  }

  // parse a date in yyyy-mm-dd format
  parseDate(input: any) {
    var parts = input.split('-');
    return new Date(parts[0], parts[1] - 1, parts[2]); // Note: months are 0-based
  }

  onSubmit() {
    console.log("onSubmit form:", this.subject);
    this._subjectsService.updateSubject(this.subject)
      .subscribe((res) => {
        console.log("response:", res);
        this._router.navigate(['/subjects']);
      },
      (e: any) => {
        console.log("error:", e);
      });
  }

  onCancel() {
    console.log('onCancel');
    this._router.navigate(['/home']);
  }
}
