import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppHeaderComponent } from './app-header.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DragulaModule } from 'ng2-dragula';
import { NgxKjuaModule } from 'ngx-kjua';
import { ImageViewerModule } from 'ng2-image-viewer';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AngularSplitModule } from 'angular-split';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgxPaginationModule,
    FilterPipeModule,
    NgxChartsModule,
    InfiniteScrollModule,
    AngularSplitModule.forRoot(),
    DragulaModule.forRoot(),
    NgxKjuaModule,
    NgxSpinnerModule,
    ImageViewerModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
