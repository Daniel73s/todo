import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
private url:string="https://localhost/roles"
  constructor(private http:HttpClient) { }


  getRolById(codrol:number){
     return this.http.get(`${this.url}/listarrolbyid/${codrol}`).toPromise();
  }
}
