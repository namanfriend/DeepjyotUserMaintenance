import { Utility } from '../../../Utility/Utiliry';
import { GridHeader, RowAction } from '../basicgrid.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-defaultcolumn',
  templateUrl: './defaultcolumn.component.html',
  styleUrls: ['./defaultcolumn.component.css']
})
export class DefaultcolumnComponent implements OnInit {
  @Input() data: any;
  @Input() header: GridHeader;
  @Output() rowAction: EventEmitter<RowAction> = new EventEmitter();
  displayValue: string;
  constructor() { }

  ngOnInit() {
    this.displayValue = Utility.getPropertyValue(this.data, this.header.dataRef);
  }
  rowActionPerformed($event) {
    const rowAction: RowAction = {
      actionType: $event,
      gridRow: this.data
    };
    this.rowAction.emit(rowAction);
  };

}
