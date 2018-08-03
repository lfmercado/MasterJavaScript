import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Project } from '../models/project.model';
import { Global } from './global.service';
import { post } from '../../../node_modules/@types/selenium-webdriver/http';


@Injectable()
export class ProjectService{
    public url:String;

    constructor( private _http: HttpClient){
        this.url= Global.url;
    }

    testService(){
        return 'probando servicio del projecto';
    }

    saveProject(project:Project):Observable<any>{
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        
        return this._http.post(this.url+'save',params, {headers: headers});
    }

    getProjects():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'projects', {headers:headers});
    }

    getProject(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

       return  this._http.get(this.url + 'project/'+ id, {headers:headers});
    }
    
    deleteProject(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + 'project/'+ id , {headers: headers});
    }
}