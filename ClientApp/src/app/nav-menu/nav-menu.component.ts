import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
//import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  constructor(
    //private router: Router
    private api: ApiService
    ){}
  
  showPerson(){
    //alert('p');
    //this.router.navigateByUrl("/inquiry/person", { skipLocationChange: true });
    this.api.changeCommand.emit("person");
  }

  showVehicle(){
    //alert('p');
    //this.router.navigateByUrl("/inquiry/vehicle", { skipLocationChange: true });
    this.api.changeCommand.emit("vehicle");
  }

  showProperty(){
    //alert('p');
    //this.router.navigateByUrl("/inquiry/property", { skipLocationChange: true });
    this.api.changeCommand.emit("property");
  }

}
