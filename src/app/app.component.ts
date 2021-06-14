import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
//import { Passwords } from './passwords';
//import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  //resetPwd: any;
  title = 'reset-password-sample';
  clickMessage='';
  msg= '';
  genNewPassword: boolean = false;
  syncPassword: boolean = true;
  configPassword: boolean = false;
  rebootCpe: boolean = true;
  smsPassword: boolean = false;

  /*password: Passwords[] = [
    {
      "name": "Generate New Password"
    },
    {
      "name": "Sync Password"
    },
    {
      "name": "Configure Password"
    },
    {
      "name": "Reboot CPE"
    }
  ];*/
  disableNew!: boolean;
  disableSync!: boolean;
  //disableConfig: boolean = false;
  //disableReboot: boolean = false;
  //disableSms: boolean = false;

  constructor (){}

  ngOnInit(): void {}

    ngOnChanges(changes: SimpleChanges): void {
      if (changes['resetPwd']) {
        this.checkSymptoms();
    }
  }

  /*getCSSClasses(flag:string) {
    let cssClasses;
    if(flag == 'nightMode') {
      cssClasses = {
        'indicator.good': true
      }
    } else {
        cssClasses = {
          'bad': false
        }
    }
    return cssClasses;
  }*/

    onClickMe(event?: MouseEvent) {
      const evtMsg = event ? ' Password Match ! ' + (event.target as HTMLElement).textContent : '';
      alert(evtMsg);
      if (event) { event.stopPropagation(); }
    }

    getValue(event: Event ) : string {
      return (event.target as HTMLInputElement).value;
    }

    clickEvent(event?: MouseEvent) {
      const evtMsg = event ? 'SMS send to Customer.' : '';
      alert(evtMsg);
        if (event) { event.stopPropagation(); }
    //this.msg="Send SMS to customer";
    //return this.msg;
    }

    checkSymptoms() {
      this.disableNew = false;
      this.disableSync = false;
      //this.disableConfig = false;
      //this.disableReboot = false;
      //this.disableSms = false;

    }
  }

