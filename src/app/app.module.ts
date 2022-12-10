import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { TabViewModule } from 'primeng/tabview';
import {SplitterModule} from 'primeng/splitter';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsonViewerComponent } from './JsonViewer/JsonViewer.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@NgModule({
  declarations: [
    AppComponent,
    JsonViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabViewModule,
    SplitterModule,
    InputTextareaModule,
    NgxJsonViewerModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
