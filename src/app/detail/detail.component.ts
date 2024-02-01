import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Course} from "../data/Course";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatIcon} from "@angular/material/icon";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    MatCardHeader,
    MatCard,
    MatCardTitle,
    NgIf,
    FormsModule,
    MatFormField,
    MatCardContent,
    MatInput,
    MatCardActions,
    MatButton,
    MatCheckbox,
    MatIcon,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnChanges {
  title = 'Select a Planet or create a new one!';
  @Input() selectedContent?: Course;
  @Input() contentList?: Course[] = [];
  @Output() onContentSave = new EventEmitter<Course>;
  localContent: Course = this.getDefaultContent()

  ngOnChanges(changes: SimpleChanges) {
    let newContent = changes['selectedContent'] && changes['selectedContent'].currentValue;
    if (newContent) {
      this.localContent = {
        id: newContent.id,
        name: newContent.name,
        teacher: newContent.teacher,
        time: newContent.time,
        location: newContent.location
      };
    } else {
      this.reset();
    }
  }

  createContent(createdContent?: Course) {
    console.log("Creating Content: " + JSON.stringify(createdContent))

    if (this.contentList && createdContent) {
      this.contentList.push({
        id: Math.random(),
        name: createdContent.name,
        teacher: createdContent.teacher,
        time: createdContent.time,
        location: createdContent.location
      })

      this.reset();
    }
  }

  saveContent(updatedContent?: Course) {
    console.log("Update for: " + JSON.stringify(updatedContent))

    if (this.contentList && updatedContent) {
      let idx: number = this.contentList.findIndex(content => content.id == updatedContent.id);

      if (idx !== -1) {
        this.onContentSave.emit(updatedContent);
        this.contentList[idx] = {
          id: updatedContent.id,
          name: updatedContent.name,
          teacher: updatedContent.teacher,
          time: updatedContent.time,
          location: updatedContent.location
        }
      } else {
        this.createContent(updatedContent);
      }

      // Maybe
      this.reset();
    }
  }

  reset() {
    this.localContent = this.getDefaultContent();
  }

  private getDefaultContent() : Course {
    return {
      id: -1,
      name: '',
      teacher: '',
      time: '00:00',
      location: ''
    }
  }
}
