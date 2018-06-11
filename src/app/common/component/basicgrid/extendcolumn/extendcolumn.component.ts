import { Utility } from '../../../Utility/Utiliry';
import { GridHeader, RowAction } from '../basicgrid.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-extendcolumn',
  templateUrl: './extendcolumn.component.html',
  styleUrls: ['./extendcolumn.component.css']
})
export class ExtendcolumnComponent implements OnInit {
  @Input() data: any;
  @Input() header: GridHeader;
  @Output() rowAction: EventEmitter<RowAction> = new EventEmitter();
  displayValue: string;
  showModel: Boolean = false;
  tenure: String;
  constructor() { }

  ngOnInit() {
    this.displayValue = Utility.getPropertyValue(this.data, this.header.dataRef);
  }
  rowActionPerformed($event) {
    this.data.tenure = this.tenure;
    const rowAction: RowAction = {
      actionType: $event,
      gridRow: this.data
    };
    this.rowAction.emit(rowAction);
  };

}
