import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Students {
  studentID: number,
  name: string,
  age: number,
  email: string,
  number: number
}

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private apiUrl = 'http://localhost:3000/'

  constructor(
    private http: HttpClient
  ) { }

  //insert
  addStudent(student: Students): Observable<Students>{
    return this.http.post<Students>(this.apiUrl+'bulkStudents', student);
  }

  addSingleStudent(student: Students): Observable<Students>{
    return this.http.post<Students>(this.apiUrl+'singleStudent', student);
  }

  //find
  getStudent(): Observable<Students[]> {
    return this.http.get<Students[]>(this.apiUrl);
  }
}
