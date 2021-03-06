import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ListViewComponent, ListViewAllModule } from '@syncfusion/ej2-ng-lists';
import { NavigationComponent } from './navigationtab/navigation';
import { ContentComponent } from './content/content';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ListViewAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
