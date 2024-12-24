import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  
  production:true | undefined
  apiEndPoint: string = "http://43.205.255.47:80/api/HospitalAppointment/";
  constructor(private http: HttpClient) { }

  createNew(obj:any): Observable<any> {
    return this.http.post(this.apiEndPoint + "AddNewAppointment", obj)
  }

  getAppointments(): Observable<any>{
    return this.http.get<Observable<any>>(this.apiEndPoint + "getAppointments")
  }
  
}
