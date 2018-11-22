import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  balance: string;
  username: string;
  localtime: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
  
    // defualt data for testing
    
    this.balance = "100.00000";
    this.localtime = Date.now().toString();
    this.username =   navParams.get('username');
    if(this.username == ''){this.username = "paulcox";}

    setInterval(() => {
      this.localtime = Date.now().toString();
      events.publish('balance', this.balance);
        }, 1000);
    
      events.subscribe('liability', (bitcoin: string) => {
          // update the bitcoin balance
            // convert to number
          var balance = Number(this.balance);
          var liability = Number(bitcoin);
          balance -= liability;
          // and back to string
          this.balance=balance.toFixed(5).toString();
      });

      events.subscribe('profit', (bitcoin: string) => {
                // convert to number
            var balance = Number(this.balance);
            var profit = Number(bitcoin);
            balance -= profit;
            // and back to string
            this.balance=balance.toFixed(5).toString();
       });
  }

 

}
