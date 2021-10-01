import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  $subject: BehaviorSubject<string> = new BehaviorSubject<string>('SELL');

  constructor() { }

  ngOnInit(): void {
  }

  sell() {
    this.$subject.next('SELL');
  }

  buy() {
    this.$subject.next('BUY');
  }
}
