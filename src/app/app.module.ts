import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from "./app-material.module";
import { AccountComponent } from './ui/account/account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PoolComponent } from './ui/pool/pool.component';
import { ModalComponent } from './ui/modal/modal.component';
import { RewardModalComponent } from './ui/reward-modal/reward-modal.component'; 
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    PoolComponent,
    ModalComponent,
    RewardModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [],
  entryComponents: [ModalComponent, RewardModalComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
