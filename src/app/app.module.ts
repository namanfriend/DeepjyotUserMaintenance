import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BasicgridComponent } from './common/component/basicgrid/basicgrid.component';
import { DefaultcolumnComponent } from './common/component/basicgrid/defaultcolumn/defaultcolumn.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchcriteriaComponent } from './dashboard/searchcriteria/searchcriteria.component';
import { GridComponent } from './dashboard/grid/grid.component';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { ExtendcolumnComponent } from './common/component/basicgrid/extendcolumn/extendcolumn.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchcriteriaComponent,
    GridComponent,
    BasicgridComponent,
    DefaultcolumnComponent,
    DetailsComponent,
    ExtendcolumnComponent
  ],
  imports: [
    BrowserModule,
    MyDateRangePickerModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
