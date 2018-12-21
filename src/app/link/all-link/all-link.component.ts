import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-link',
  templateUrl: './all-link.component.html',
  styleUrls: ['./all-link.component.less']
})
export class AllLinkComponent implements OnInit {

  panels = [
    {
      active    : true,
      name      : '生成链接',
      disabled  : false
    }];
  constructor() { }

  ngOnInit() {
  }

}
