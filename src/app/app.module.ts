import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BasicgridComponent } from './common/component/basicgrid/basicgrid.component';
import { DefaultcolumnComponent } from './common/component/basicgrid/defaultcolumn/defaultcolumn.component';
import { ExtendcolumnComponent } from './common/component/basicgrid/extendcolumn/extendcolumn.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GridComponent } from './dashboard/grid/grid.component';
import { SearchcriteriaComponent } from './dashboard/searchcriteria/searchcriteria.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDateRangePickerModule } from 'mydaterangepicker';


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
