// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { AuthGuardService } from './services/auth-guard.service';
// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { CounterComponent } from './counter/counter.component';
// import { FetchDataComponent } from './fetch-data/fetch-data.component';
// import { InquiryCommand } from './inquiry/inquiry-cmd.component';

// const routes: Routes = [
//     { path: '', component: HomeComponent, pathMatch: 'full' },
//     { path: 'counter', component: CounterComponent, canActivate: [AuthGuardService] },
//     { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthGuardService] },
//     { path: 'inquiry/:id', component: InquiryCommand, canActivate: [AuthGuardService] },
//   ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes, { useHash: false })],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
