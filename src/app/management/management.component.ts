import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.less']
})
export class ManagementComponent implements OnInit {

  panels = [
    {
      active    : true,
      name      : '链接管理',
      disabled  : false,
      title      : '链接管理',
      link : 'linkManage'
    },
    {
      active    : true,
      name      : '用户管理',
      disabled  : false,
      title      : '用户管理',
      link : 'userManage'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
