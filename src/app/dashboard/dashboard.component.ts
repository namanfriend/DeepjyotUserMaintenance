import { SubscriptionService } from '../service/subscription.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [SubscriptionService]
})
export class DashboardComponent implements OnInit {
  @Output() viewChanged = new EventEmitter();
  searchCriteria: any= { view: 'ALL' };
  subscriptions: any[];
  errorMessage: String;
  dataSubject: BehaviorSubject<any> = new BehaviorSubject([]);
  initData: any = { };
  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit() {
    this.searchActionPerfermed(this.searchCriteria);
    this.subscriptionService.init(this.initSuccess.bind(this));
  };

  initSuccess(responseJson: any) {
    this.initData.VIEWS = responseJson.VIEWS;
    this.initData.TENURE = responseJson.TENURE;
  }

  getSubscriptionListSuccess(responseJson: any[]) {
     this.dataSubject.next(responseJson);
  };

  viewChangedEvent($event) {
    console.log($event);
    this.viewChanged.emit($event);
  }
  searchActionPerfermed($event) {
    this.subscriptionService.getSubscriptionList(this.searchCriteria, this.getSubscriptionListSuccess.bind(this));
  }
}
