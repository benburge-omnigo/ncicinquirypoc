import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'inquiry-responses-component',
  templateUrl: './inquiry-responses.component.html'
})
export class InquiryResponses {

 
    responses = [];

    constructor(
        private api: ApiService) {}

    ngOnInit() {
        this.getResponses();

        this.api.dataChanged.subscribe(()=>{
            this.getResponses();
        });
    }

    getResponses() {
    //     this.api.getResponses()
    //       .subscribe(data => {
    //         for (const d of (data as any)) {
    //           this.responses.push({
    //             name: d.name,
    //             price: d.price
    //           });
    //         }
    //       });
    //   }

        //this.api.getResponses().subscribe
        this.responses.length = 0;
        const data = this.api.getResponses();
        for (const d of (data as any)) {
            this.responses.push(d);
        }
    }
}
