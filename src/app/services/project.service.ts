import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Project } from '../models/project.model'
import { Injectable } from '@angular/core'


@Injectable({ providedIn: 'root' })

export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects() {
    const path = '/projects'
    
    return this.http.get<Project[]>(environment.apiUrl + path)
  }

  createProject(project: Project) {
    const path = '/projects'

    return this.http.post<Project>(environment.apiUrl + path, project)
  }
}
