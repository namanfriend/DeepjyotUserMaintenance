import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { StringLiteral } from 'typescript';

@Component({
  selector: 'app-basicgrid',
  templateUrl: './basicgrid.component.html',
  styleUrls: ['./basicgrid.component.css']
})
export class BasicgridComponent implements OnInit {
  @Input() dataSubject: BehaviorSubject<any>;
  @Input() config: BasicgridColumnConfig;
  @Output() gridAction = new EventEmitter();
  @Output() rowAction = new EventEmitter();
  data: any[] = [];
  dataDisplay: any[] = [];
  sortByColumnHeader: string;
  sortDirection = 1;
  pagination: any = {
    totalPages: 1,
    currentPage: 1,
    pageSize: 20,
    startIndex: 1,
    endIndex: 20,
    totalRecords: 0
  };
  constructor() { }
  ngOnInit() {
    this.converWidthToPX();
    this.dataSubject.subscribe(this.searchSuccess.bind(this));
    this.sortByColumnHeader = this.config.defaultSorting;
  };

  searchSuccess(gridData: any[]) {
    this.data = gridData;
    this.displayPageClick('first');
  };

  converWidthToPX() {
    let totalWidth = 0;
    const viewPortWidth = window.screen.width;
    for (const columnHeader of this.config.header) {
      totalWidth += columnHeader.width;
    }
    for (const columnHeader of this.config.header) {
      columnHeader.widthPX = (viewPortWidth * columnHeader.width / totalWidth) + 'px';
    }
  };
  rowActionPerformed($event: RowAction) {
    this.rowAction.emit($event);
  };

  displayPageClick(displayPageEvent: String) {
    this.pagination.totalPages = Math.floor(this.data.length / this.pagination.pageSize);
    if (this.data.length % this.pagination.pageSize >= 1) {
      this.pagination.totalPages = this.pagination.totalPages + 1;
    }
    switch (displayPageEvent) {
      case 'next':
        if (this.pagination.currentPage < this.pagination.totalPages) {
          this.pagination.currentPage = this.pagination.currentPage + 1;
        } else {
          this.pagination.currentPage = this.pagination.totalPages;
        }
        break;
      case 'previous':
        if (this.pagination.currentPage > 1) {
          this.pagination.currentPage = this.pagination.currentPage - 1;
        } else {
          this.pagination.currentPage = 1;
        }
        break;
      case 'first':
          this.pagination.currentPage = 1;
        break;
      case 'last':
          this.pagination.currentPage = this.pagination.totalPages;
        break;
    }
    const startPageIndex = this.pagination.pageSize * (this.pagination.currentPage - 1);
    let lastPageIndex = startPageIndex + this.pagination.pageSize;
    if (startPageIndex + this.pagination.pageSize > (this.data.length - 1)) {
      lastPageIndex = this.data.length;
    }
    this.pagination.startIndex = startPageIndex + 1;
    this.pagination.endIndex = lastPageIndex;
    this.pagination.totalRecord = this.data.length;
    this.dataDisplay = this.data.slice(startPageIndex, lastPageIndex);
  }

  sortingUpdated(columnDataRef: string) {
    if (columnDataRef === this.sortByColumnHeader) {
      this.sortDirection = this.sortDirection * -1;
    } else {
      this.sortDirection = 1;
      this.sortByColumnHeader = columnDataRef;
    }
    this.sortData(columnDataRef);
  }

  sortData(columnName: string) {
    this.data = this.data.sort(this.sort.bind(this));
    this.displayPageClick('first');
  }

  sort(a: any, b: any) {
    let A = a[this.sortByColumnHeader];
    let B = b[this.sortByColumnHeader];

    if (typeof A === 'string') {
      A = a[this.sortByColumnHeader].toLowerCase();
      B = b[this.sortByColumnHeader].toLowerCase();
    }
    if (A < B) {
      return -1 * this.sortDirection;
    } else {
      return 1 * this.sortDirection;
    }
  }
}

export interface RowAction {
  gridRow: any;
  actionType: string;
}

export interface BasicgridColumnConfig {
  header: GridHeader[];
  label?: String;
  displayColumn?: string;
  defaultSorting?: string;
}

export interface GridHeader {
  label: string;
  dataRef: string;
  isSortable?: boolean;
  editConfig?: EditableColumnConfig;
  width?: number;
  widthPX?: string;
  visible: boolean;
  enableSorting?: boolean;
}

export interface EditableColumnConfig {
  fieldType: string;
  fieldFamily?: string;
  dataRef?: string;
  otherConfig?: any;
}
