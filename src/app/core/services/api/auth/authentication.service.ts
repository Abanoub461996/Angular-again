import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser, registerUser } from 'src/app/core/interfaces/user';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  configUrl = 'https://api.escuelajs.co/api/v1';
  token = localStorage.getItem('token');

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${this.token}`
    }),
  };

  login(data:LoginUser):Observable<any>{
    return this.http.post(`${this.configUrl}/auth/login`,data)
  }

  register(data:registerUser):Observable<any>{
    return this.http.post(`${this.configUrl}/users`,data)
  }

  authToken():Observable<any>{
    const headers = new HttpHeaders({"Authorization": `Bearer ${this.token}`});
    return this.http.get(`https://api.escuelajs.co/api/v1/auth/profile`,this.httpOptions)

  }

   // Error handling
   handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);//replace it with a toaster message
    return throwError(() => {
      return errorMessage;
    });
  }
}
