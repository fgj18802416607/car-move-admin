import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lmanagement',
  templateUrl: './lmanagement.component.html',
  styleUrls: ['./lmanagement.component.less']
})
export class LmanagementComponent implements OnInit {

  public searchList = [];
  public tel = '';
  public license = '';

  ngOnInit() {
    this.searchList = this.dataBase;
  }

  dataBase = [
    {
      link: 'http://9c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      switchValue: true,
    },
    {
      link: 'http://9c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      switchValue: true,
    },
    {
      link: 'http://9c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      switchValue: true,
    },
    {
      link: 'http://9c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      switchValue: true,
    },
    {
      link: 'http://9c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      switchValue: true,
    },
    {
      link: 'http://9c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      switchValue: true,
    },
    {
      link: 'http://9c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      switchValue: true,
    },
    {
      link: 'http://9c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      switchValue: true,
    },

    {
      link: 'http://9c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      switchValue: true,
    },
    {
      link: 'http://9c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      switchValue: true,
    },
    {
      link: 'http://9c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      switchValue: true,
    },
    {
      link: 'http://9c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      switchValue: true,
    },
    {
      link: 'http://9c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      switchValue: true,
    },
    {
      link: 'http://9c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      switchValue: true,
    },
    {
      link: 'http://9c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      switchValue: true,
    },
    {
      link: 'http://9c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      switchValue: true,
    },
    {
      link: 'http://9c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      switchValue: true,
    },
    {
      link: 'http://9c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      switchValue: true,
    },
    {
      link: 'http://9c.ltd/56w',
      tel: '18888888888',
      Plate: '辽A45678',
      switchValue: true,
    }
  ];

  onSelect() {
    this.searchList = [];
    this.dataBase.forEach(item => {
      const telIndex = item.tel.indexOf(this.tel);
      const licenseIndex = item.Plate.indexOf(this.license);
      if (telIndex > -1 && licenseIndex > -1) {
        this.searchList.push(item);
      }
    });
  }

  onReset() {
    this.tel = '';
    this.license = '';
    this.searchList = this.dataBase;
  }

  constructor() { }

}
