import {Component, Input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatActionList, MatListItem} from "@angular/material/list";
import {NgClass, NgForOf} from "@angular/common";
import {MatLine} from "@angular/material/core";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {DetailComponent} from "../detail/detail.component";
import {Course} from "../data/Course";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    MatCardTitle,
    MatCardHeader,
    MatCard,
    MatActionList,
    MatCardContent,
    NgForOf,
    MatLine,
    MatListItem,
    MatIcon,
    MatButton,
    DetailComponent,
    NgClass
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  title = 'Courses';
  @Input() contentList?: Course[];
  currentContent?: Course;

  selectContent(selectedContent: Course) {
    this.currentContent = selectedContent;
  }

  deleteContent(deletedContent: Course) {
    if (this.contentList && deletedContent) {
      let idx: number = this.contentList.findIndex(content => content.id == deletedContent.id);

      console.log("Delete index found: " + idx);
      if (idx !== -1) {
        this.contentList.splice(idx, 1);
      }
    }
    this.currentContent = undefined;
  }

  handleContentUpdate(contentEvent: Course) {
    // Just a test of sending something back to the list component
    console.log("Event Update for Content Received: " + JSON.stringify(contentEvent))
  }
}
