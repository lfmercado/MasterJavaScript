import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router, Params } from '@angular/router';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import {UploadService } from '../../services/upload.service';
import { Global } from '../../services/global.service';


@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {


  public title: String;
  public project: Project;
  public res:boolean;
  public saveProject;
  public fileToUpload : Array<File>;
  public url: String;
  constructor(private _projectService: ProjectService,
              private _uploadService: UploadService,
              private _router: Router,
              private _route: ActivatedRoute ) {
    this.title = "Editar Proyecto";
    this.url= Global.url;
    
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

  onSubmit(){
    this._projectService.editProject(this.project).subscribe(
      response =>{
            if(response.projectUpdate){
            //Subir la imagen
            console.log(this.fileToUpload);
                  if (this.fileToUpload){
                this._uploadService.makeFileRequest(Global.url + 'upload_image/' + response.projectUpdate._id,[],this.fileToUpload,"image")
                .then((result:any)=>{
                  this.saveProject = result.project;
                  this.res = true;
                  console.log(result); 
                  });
                }else{
                  this.saveProject = response.projectUpdate;
                  this.res = true;
                }
          }else{
            this._router.navigate(['/projects']); 
          }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any){
    this.fileToUpload = <Array<File>>fileInput.target.files;

    console.log(fileInput);
  }

}
