import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SubjectsComponent } from './subjects.component';
import { SubjectsListComponent } from './subjects-list.component';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectEditComponent } from './subject-edit.component';
import { SubjectsNewComponent } from './subjects-new.component';
import { SubjectResolver } from './subject.resolver';

@NgModule({
  imports: [SubjectsRoutingModule, CommonModule, FormsModule],
  declarations: [SubjectsComponent,
    SubjectsListComponent,
    SubjectEditComponent, SubjectsNewComponent],
  providers: [SubjectResolver]
})

export class SubjectsModule { }
