import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {

  public title : String;
  public project : Project;


  constructor(private _projectService: ProjectService) { 
    this.title = "Crear Proyecto";
    this.project = new Project('','','','',2018,'','');


  }

  ngOnInit() {
  }
  onSubmit(form){
    
    console.log(this.project);
  }

}
