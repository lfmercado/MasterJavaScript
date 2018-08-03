import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

  public title: String;
  public project: Project;
  public res:boolean;
  public saveProject;
  public fileToUpload : Array<File>;
  constructor(private _projectService: ProjectService,
              private _uploadService: UploadService) {
    this.title = "Crear Proyecto";
    this.project = new Project('', '', '', '', 2018, '', '');
  }

  ngOnInit() {
  }
  onSubmit(form) {
    //Guardar los datos
    this._projectService.saveProject(this.project).subscribe(
      response => {
        console.log(response);
        
        //Subir la imagen
        this._uploadService.makeFileRequest(Global.url + 'upload_image/' + response.project._id,[],this.fileToUpload,"image").then((result:any)=>{
          this.saveProject = result.project;
          this.res = true;
          console.log(result);
          form.reset();
        });
      },
      error => {
        console.log(error);
        this.res = false;
        form.reset();
      }
    );
  }

  fileChangeEvent(fileInput: any){
    this.fileToUpload = <Array<File>>fileInput.target.files;

    console.log(fileInput);
  }

}
