import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../card/project'

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get<Project[]>('https://apifortodo.herokuapp.com/projects')
  }

  createProject(fields: object) {
    return this.http.post<Project>('https://apifortodo.herokuapp.com/projects', fields)
  }
}
