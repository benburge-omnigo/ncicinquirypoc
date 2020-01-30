import { BrowserModule } from '@angular/platform-browser';
import { NgModule, RootRenderer } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
//import { AuthGuardService } from './services/auth-guard.service';
//import { AppRoutingModule } from './app-routing.module';
import { InquiryCommand } from './inquiry/inquiry-cmd.component';
import { ApiService } from './services/api.service';
import { InquiryResponses } from './responses/inquiry-responses.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    InquiryCommand,
    InquiryResponses
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    //AppRoutingModule
  ],
  //providers: [AuthGuardService, ApiService],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
