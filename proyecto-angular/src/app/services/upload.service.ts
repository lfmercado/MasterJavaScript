import { Injectable } from '@angular/core';
import { Global } from './global.service';

@Injectable()
export class UploadService{
    public url: String;
    constructor(){
        this.url = Global.url;
    }

    makeFileRequest(url: string, params : Array<String>, files: Array<File>, name : string){
        return new Promise( function(resolve, reject){
             var formData = new FormData();
             var xhr = new XMLHttpRequest();
             for (let index = 0; index < files.length ; index++) {
                 formData.append(name, files[index], files[index].name);               
             }
             xhr.onreadystatechange = function(){
                 if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.response));
                    }else
                    {
                        reject(JSON.parse(xhr.response));
                    }
                 }
             }

             xhr.open('POST', url, true);
             xhr.send(formData);
        });
        }
}