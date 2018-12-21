import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.less']
})
export class UserIndexComponent implements OnInit {

  panels = [
    {
      active    : true,
      name      : '首页',
      disabled  : false
    }
  ];

  public onRefresh() {
    window.location.reload();
  }

  constructor() { }

  ngOnInit() {
  }

}
