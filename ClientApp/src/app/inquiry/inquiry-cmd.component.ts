import { Component } from '@angular/core';
//import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'inquiry-cmd-component',
  templateUrl: './inquiry-cmd.component.html'
})
export class InquiryCommand {
  commandName = "";
  isRunning = false;
  isPerson = false;
  isVehicle = false;
  isProperty = false;

  isDestroyed = false;

  constructor(
    // private route: ActivatedRoute,
    // private router: Router,
    private api: ApiService
  ) {}



  ngOnInit() {

    // this.route.paramMap.pipe(
    //     switchMap((params: ParamMap) =>
    //       of(params.get('id'))
    //     )
    //   ).subscribe((d) => {
    //     this.commandName = d;
    //     this.toggleView(d);
    //   });

    this.api.changeCommand.subscribe((e)=>{
      this.commandName = e;
      this.toggleView(e);
    });
    

  }

  public ngOnDestroy() {
    this.isDestroyed = true;
  }

  toggleView(id){
    if(this.isDestroyed){
      return;
    }

    switch(id){
        case "person":
            this.isPerson = true;
            this.isProperty = false;
            this.isVehicle = false;
            break;
        case "property":
            this.isProperty = true;
            this.isPerson = false;
            this.isVehicle = false;
            break;
        case "vehicle":
            this.isVehicle = true;
            this.isProperty = false;
            this.isPerson = false;
            break;
    }
  }

  run(){
    this.isRunning = true;

    this.api.runInquiry("test 123");

    setTimeout(() => {
        this.isRunning = false;
    }, 4500);

  }

}
