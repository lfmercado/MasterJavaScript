import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Project } from '../models/project.model';
import { Global } from './global.service';


@Injectable()
export class ProjectService{
    public url:String;

    constructor( private _http: HttpClient){
        this.url= Global.url;
    }

    testService(){
        return 'probando servicio del projecto';
    }
}