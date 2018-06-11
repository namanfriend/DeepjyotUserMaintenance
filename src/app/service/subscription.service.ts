import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SubscriptionService {
  URL_SUBSCRIPTION_LIST = 'http://localhost:8080/DipJyotWebModule/rest/dipjyot/getList';
  URL_SUBSCRIPTION_DETAILS = 'http://localhost:8080/DipJyotWebModule/rest/dipjyot/subscriptionDetails';
  URL_SUBSCRIPTION_UPDATE = 'http://localhost:8080/DipJyotWebModule/rest/dipjyot/updateSubscription';
  URL_SUBSCRIPTION_CREATE = 'http://localhost:8080/DipJyotWebModule/rest/dipjyot/createSubscription';
  URL_SUBSCRIPTION_EXTEND = 'http://localhost:8080/DipJyotWebModule/rest/dipjyot/extendSubscription';
  URL_SUBSCRIPTION_INIT = 'http://localhost:8080/DipJyotWebModule/rest/dipjyot/initService';
  URL_SUBSCRIPTION_PRINT_STICKER = 'http://localhost:8080/DipJyotWebModule/rest/dipjyot/printSticker';
  URL_SUBSCRIPTION_DOWNLOAD_FILE = 'http://localhost:8080/DipJyotWebModule/servlet/DownloadServlet';
  constructor(private http: Http) { }

  printSticker(searchCriteria: any, successFunction) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    this.http.post(this.URL_SUBSCRIPTION_PRINT_STICKER, searchCriteria, options)
      .subscribe(
       (response) => {
              /* this function is executed every time there's a new output */
            console.log('VALUE RECEIVED: ' + response);
            const resFinal: any = response;
            window.open(this.URL_SUBSCRIPTION_DOWNLOAD_FILE + '?fileName=' + resFinal._body);
            successFunction.call(null);
       },
       (err) => {
              /* this function is executed when there's an ERROR */
              console.log('ERROR: ' + err);
         this.handleErrorObservable(err);
       },
       () => {
              /* this function is executed when the observable ends (completes) its stream */
              console.log('COMPLETED');
       }
     );
  };

  getSubscriptionList(searchCriteria: any, successFunction) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    this.http.post(this.URL_SUBSCRIPTION_LIST, searchCriteria, options)
      .subscribe(
       (response) => {
              /* this function is executed every time there's a new output */
             console.log('VALUE RECEIVED: ' + response);
         successFunction.call(null, response.json());
       },
       (err) => {
              /* this function is executed when there's an ERROR */
              console.log('ERROR: ' + err);
         this.handleErrorObservable(err);
       },
       () => {
              /* this function is executed when the observable ends (completes) its stream */
              console.log('COMPLETED');
       }
     );
  };

  init(successFunction) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    this.http.post(this.URL_SUBSCRIPTION_INIT, 'test', options)
      .subscribe(
       (response) => {
              /* this function is executed every time there's a new output */
             console.log('VALUE RECEIVED: ' + response);
         successFunction.call(null, response.json());
       },
       (err) => {
              /* this function is executed when there's an ERROR */
              console.log('ERROR: ' + err);
         this.handleErrorObservable(err);
       },
       () => {
              /* this function is executed when the observable ends (completes) its stream */
              console.log('COMPLETED');
       }
     );
  };

  getSubscriptionDetails(subscriptionId: number, successFunction) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    this.http.post(this.URL_SUBSCRIPTION_DETAILS, subscriptionId, options)
      .subscribe(
       (response) => {
              /* this function is executed every time there's a new output */
             console.log('VALUE RECEIVED: ' + response);
         successFunction.call(null, response.json());
       },
       (err) => {
              /* this function is executed when there's an ERROR */
              console.log('ERROR: ' + err);
         this.handleErrorObservable(err);
       },
       () => {
              /* this function is executed when the observable ends (completes) its stream */
              console.log('COMPLETED');
       }
     );
  };

  updateSubscription(subscription: any, successFunction) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    this.http.post(this.URL_SUBSCRIPTION_UPDATE, subscription, options)
      .subscribe(
       (response) => {
              /* this function is executed every time there's a new output */
             console.log('VALUE RECEIVED: ' + response);
         successFunction.call(null, response.json());
       },
       (err) => {
              /* this function is executed when there's an ERROR */
              console.log('ERROR: ' + err);
         this.handleErrorObservable(err);
       },
       () => {
              /* this function is executed when the observable ends (completes) its stream */
              console.log('COMPLETED');
       }
     );
  };

  extendSubscription(subscription: any, successFunction) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    this.http.post(this.URL_SUBSCRIPTION_EXTEND, subscription, options)
      .subscribe(
       (response) => {
              /* this function is executed every time there's a new output */
             console.log('VALUE RECEIVED: ' + response);
         successFunction.call(null, response.json());
       },
       (err) => {
              /* this function is executed when there's an ERROR */
              console.log('ERROR: ' + err);
         this.handleErrorObservable(err);
       },
       () => {
              /* this function is executed when the observable ends (completes) its stream */
              console.log('COMPLETED');
       }
     );
  };

  createSubscription(subscription: any, successFunction) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    this.http.post(this.URL_SUBSCRIPTION_CREATE, subscription, options)
      .subscribe(
       (response) => {
              /* this function is executed every time there's a new output */
             console.log('VALUE RECEIVED: ' + response);
         successFunction.call(null, response.json());
       },
       (err) => {
              /* this function is executed when there's an ERROR */
              console.log('ERROR: ' + err);
         this.handleErrorObservable(err);
       },
       () => {
              /* this function is executed when the observable ends (completes) its stream */
              console.log('COMPLETED');
       }
     );
  };

  private extractData(res: Response) {
    const body: any = res.json();
    return body.data || {};
  }
  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}
