import { SubscriptionService } from '../../service/subscription.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {IMyDrpOptions} from 'mydaterangepicker';


@Component({
  selector: 'app-searchcriteria',
  templateUrl: './searchcriteria.component.html',
  styleUrls: ['./searchcriteria.component.css'],
  providers: [SubscriptionService]
})
export class SearchcriteriaComponent implements OnInit {
  @Input() searchCriteria: any;
  @Input() initData: any;
  @Output() searchAction = new EventEmitter();
  @Output() viewChanged = new EventEmitter();
  myDateRangePickerOptions: IMyDrpOptions = {
        dateFormat: 'dd.mm.yyyy',
  };
  dateRange: any;
  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit() {
  }
  dateRangeUpdated(dateRange: any) {
    if (dateRange.type === 1) {
      this.searchCriteria.fromDate = dateRange.formatted;
    } else if (dateRange.type === 2) {
      this.searchCriteria.toDate = dateRange.formatted;
    }
    console.log(dateRange);
  }
  searchActionPerformed() {
    this.searchAction.emit(this.searchCriteria);
  }
  createNewSubscription() {
    this.viewChanged.emit({actionType: 'details'});
  }
  printSticker() {
    this.subscriptionService.printSticker(this.searchCriteria, this.printStickerSuccess.bind(this));
  }
  printStickerSuccess() {
    console.log('Print uccess');
  }
}
