import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global.service';
import { ActivatedRoute , Router, Params } from '@angular/router';
 
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {
  public url: String;
  public project: Project; 
  public confirm: boolean; 

  constructor( private _projectService: ProjectService,
               private _router: Router,
               private _route: ActivatedRoute  ) { 
    this.url  = Global.url;
    this.confirm = false;
  }

  ngOnInit() {
    this._route.params.subscribe(
      params =>{
        let id = params.id;
        this.getProject(id);
      });
  }
  getProject(id){
    this._projectService.getProject(id).subscribe(
      response =>{
        this.project = response.project;
        console.log(this.project);
      }, 
      error =>{
        console.log(error);
      }
    );
  }

  confirmDelete(result){
    this.confirm = result;
  }

  deleteProject(id){
    console.log(id);   
    this._projectService.deleteProject(id).subscribe(
          response => {
            console.log(response);
              if(response.projectDelete){
                console.log("entre al if");
                this._router.navigate(['/projects']);
              }
          }, 
          error => {
            console.log(<any>error);
          }
        );  
  }
}
