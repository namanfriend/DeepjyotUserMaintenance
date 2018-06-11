import { Utility } from '../common/Utility/Utiliry';
import { SubscriptionService } from '../service/subscription.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [SubscriptionService]
})
export class DetailsComponent implements OnInit {
  showPopup = false;
  @Input() eventParameter: any;
  @Output() viewChanged = new EventEmitter();
  errorOnPage: string[] = [];
  sub: any = {};
  isNewSubscription: Boolean = false;
  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit() {
    if (this.eventParameter && this.eventParameter.gridRow && this.eventParameter.gridRow.subscriptionId) {
      this.subscriptionService.getSubscriptionDetails(this.eventParameter.gridRow.subscriptionId, this.detailsSuccess.bind(this));
    } else {
      this.isNewSubscription = true;
    }
  }

  detailsSuccess(responseJson: any) {
    this.sub = responseJson;
  }

  viewChangedEvent($event) {
    this.viewChanged.emit($event);
  }

  submitActionPerformed() {
    this.errorOnPage = this.validateSubscription(this.sub);
    if (this.errorOnPage && this.errorOnPage.length >= 1) {
      this.showPopup = true;
    } else {
      this.subscriptionService.updateSubscription(this.sub, this.submitActionSuccess.bind(this));
    }
  };

  validateSubscription(sub: any) {
    const errorOnPage = [];
    if (Utility.isEmpty(sub.fullName)) {
      errorOnPage.push('Please provide Name.');
    }
    if (Utility.isEmpty(sub.addressLine1)) {
      errorOnPage.push('Please provide Address Line1.');
    }
    if (Utility.isEmpty(sub.addressLine2)) {
      errorOnPage.push('Please provide Address Line2.');
    }
    if (Utility.isEmpty(sub.city)) {
      errorOnPage.push('Please provide City.');
    }
    if (Utility.isEmpty(sub.state)) {
      errorOnPage.push('Please provide State.');
    }
    if (Utility.isEmpty(sub.pincode)) {
      errorOnPage.push('Please provide Pincode.');
    }
    return errorOnPage;
  }

  submitActionSuccess() {
    this.viewChangedEvent({actionType: 'dashboard'});
  };
  createActionPerformed() {
    this.errorOnPage = this.validateSubscription(this.sub);
    if (this.errorOnPage && this.errorOnPage.length >= 1) {
      this.showPopup = true;
    } else {
      this.subscriptionService.createSubscription(this.sub, this.submitActionSuccess.bind(this));
    }
  };
}
