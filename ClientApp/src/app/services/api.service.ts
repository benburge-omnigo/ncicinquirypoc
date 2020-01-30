import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const localUrl = 'assets/data/smartphone.json';


@Injectable({
    providedIn: 'root'
  })
  export class ApiService {

    @Output() dataChanged: EventEmitter<any> = new EventEmitter();

// should go to other service
@Output() changeCommand: EventEmitter<string> = new EventEmitter();

    constructor(private http: HttpClient) { }

    responseData = [
    { date: new Date(2020, 1, 1), status: 'pending', command: 'Here is command 1'},
    { date: new Date(2020, 1, 2), status: 'completed', command: 'Here is command 2'},
    { date: new Date(2020, 1, 3), status: 'pending', command: 'Here is command 3'},
    { date: new Date(2020, 1, 4), status: 'completed', command: 'Here is command 4'},
    { date: new Date(2020, 1, 5), status: 'completed', command: 'Here is command 5'},
    { date: new Date(2020, 1, 6), status: 'completed', command: 'Here is command 6'},
    { date: new Date(2020, 1, 7), status: 'completed', command: 'Here is command 7'}]

    getResponses() {
        //return this.http.get(localUrl);

        return this.responseData;

    }

    runInquiry(data){ 
      const record = {
        date: new Date(),
        status: 'pending',
        command: data
      };
      this.responseData.push(record);
      this.dataChanged.emit();
    }

  }