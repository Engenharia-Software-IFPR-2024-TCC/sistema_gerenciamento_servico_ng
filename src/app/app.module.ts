import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastModule } from "primeng/toast";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageService } from 'primeng/api';
import { ToastService } from './core/services/toastr/toast.service';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        ToastModule,
        BrowserAnimationsModule,
        BrowserModule
    ],
    providers: [
        ToastService,
        MessageService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
