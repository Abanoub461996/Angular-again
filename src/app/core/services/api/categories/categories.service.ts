import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Category } from 'src/app/core/interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  configUrl = 'https://api.escuelajs.co/api/v1';
  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getCategories():Observable<any>{
    return this.http.get<Category[]>(`${this.configUrl}/categories`)
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
