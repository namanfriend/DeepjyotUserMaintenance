import { BasicgridColumnConfig, GridHeader, RowAction } from '../../common/component/basicgrid/basicgrid.component';
import { SubscriptionService } from '../../service/subscription.service';
import { GridComponentConfig } from './grid.component.config';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [SubscriptionService]
})
export class GridComponent implements OnInit {
  @Input() dataSubject: BehaviorSubject<any>;
  @Output() viewChanged = new EventEmitter();
  gridConfig: BasicgridColumnConfig;
  gridData: any[];

  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit() {
    const config: GridComponentConfig = new GridComponentConfig();
    this.gridConfig = {
      header: config.headers,
        defaultSorting: 'subscriptionId'
    };
    this.dataSubject.subscribe(this.searchSuccess.bind(this));
    this.gridData = [];
    this.generateDisplayAddress(this.gridData);
  };
  searchSuccess(gridData: any[]) {
    this.generateDisplayAddress(gridData);
    this.gridData = gridData;
  };
  generateDisplayAddress(gridData: any[]) {
    for (const row of gridData) {
      row.displayAddress = '<div>' + row.addressLine1 + '</div>' +
                            '<div>' + row.addressLine2 + '</div>' +
                            '<div>' + row.addressLine3 + '</div>' +
                            '<div>' + row.city + ', ' + row.state + '</div>' +
                            '<div>' + row.pincode + '</div>';
    }
  }

  rowActionPerformed($event: RowAction) {
    if ($event.actionType === 'fullName') {
      console.log($event);
      $event.actionType = 'details';
      this.viewChanged.emit($event);
    } else if ($event.actionType === 'extendColumn') {
      console.log($event);
      this.subscriptionService.extendSubscription($event.gridRow, this.extendSubscriptionSuccess.bind(this));
    }
  }

  extendSubscriptionSuccess(responseJson: any[]) {
    this.viewChanged.emit({actionType: 'dashboard'});
  };
}
