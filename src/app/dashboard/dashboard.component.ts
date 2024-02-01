import { Component } from '@angular/core';
import {ListComponent} from "../list/list.component";
import {Course} from "../data/Course";
import {defaultCourses} from "../data/DefaultCourses";
import {MatButton, MatMiniFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ListComponent,
    MatButton,
    MatIcon,
    MatMiniFabButton,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatToolbar,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  contentList?: Course[];
  loggedIn: boolean = false;

  constructor() {
    this.contentList = defaultCourses;
  }

}
