import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GSheetService {

    constructor(private http: HttpClient) { }

    getMyData(): Observable<any> {
        return this.http.get('https://docs.google.com/spreadsheets/d/1TD6wepAu4RIOGJFui9WQeFZ0P2vbMi91OEexdoMRiLs/edit?usp=drive_link', {responseType: 'text'});
    }
}
