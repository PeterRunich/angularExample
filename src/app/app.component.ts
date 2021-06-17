import { Component, OnInit } from '@angular/core';

import { Project } from "./card/project"
import { ProjectService } from './services/project.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  title = 'todoFront';
  projects: Project[] = []

  constructor(private projectService: ProjectService) {}

	ngOnInit() {
		this.getProjects()
	}

	getProjects(): void {
		this.projectService.getProjects().subscribe(project => this.projects = project)
	}
}
