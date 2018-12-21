import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-umanagement',
  templateUrl: './umanagement.component.html',
  styleUrls: ['./umanagement.component.less']
})
export class UmanagementComponent implements OnInit {
  public searchList = [];
  public tel = '';
  public license = '';
  public carStatus = '';
  public status = '加入黑名单';

  ngOnInit() {
    this.searchList = this.dataSet;
  }

  dataSet = [
    {
      link: 'http://1c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      serveStatus: '黑名单',
      status: '移出黑名单'
    },
    {
      link: 'http://2c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      serveStatus: '正常',
      status: '加入黑名单'
    },
    {
      link: 'http://3c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      serveStatus: '正常',
      status: '加入黑名单'
    },
    {
      link: 'http://4c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      serveStatus: '正常',
      status: '加入黑名单'
    },
    {
      link: 'http://5c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      serveStatus: '正常',
      status: '加入黑名单'
    },
    {
      link: 'http://6c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      serveStatus: '正常',
      status: '加入黑名单'
    },
    {
      link: 'http://7c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      serveStatus: '正常',
      status: '加入黑名单'
    },
    {
      link: 'http://8c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      serveStatus: '正常',
      status: '加入黑名单'
    },

    {
      link: 'http://9c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      serveStatus: '黑名单',
      status: '移出黑名单'
    },
    {
      link: 'http://91c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      serveStatus: '黑名单',
      status: '移出黑名单'
    },
    {
      link: 'http://92c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      serveStatus: '正常',
      status: '加入黑名单'
    },
    {
      link: 'http://93c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      serveStatus: '正常',
      status: '加入黑名单'
    },
    {
      link: 'http://94c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      serveStatus: '正常',
      status: '加入黑名单'
    },
    {
      link: 'http://95c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      serveStatus: '正常',
      status: '加入黑名单'
    },
    {
      link: 'http://96c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      serveStatus: '正常',
      status: '加入黑名单'
    },
    {
      link: 'http://97c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      serveStatus: '正常',
      status: '加入黑名单'
    },
    {
      link: 'http://98c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      serveStatus: '正常',
      status: '加入黑名单'
    },
    {
      link: 'http://99c.ltd/56w',
      tel: '17666666666',
      Plate: '辽A12323',
      serveStatus: '正常',
      status: '加入黑名单'
    },
    {
      link: 'http://19c.ltd/56w',
      tel: '18888888888',
      Plate: '辽A45678',
      serveStatus: '正常',
      status: '加入黑名单'
    }
  ];

  carOptions = [
    {
      value: '辽A12323',
      label: '辽A12323',
      isLeaf: true
    },
    {
      value: '辽A45678',
      label: '辽A45678',
      isLeaf: true
    }
  ];

  statusOptions = [{
      value: '正常',
      label: '正常',
      isLeaf: true
    },
    {
      value: '黑名单',
      label: '黑名单',
      isLeaf: true
    }
  ];

  onSelect() {
    this.searchList = [];
    this.dataSet.forEach(item => {
      const telIndex = item.tel.indexOf(this.tel);
      const licenseIndex = item.Plate.indexOf(this.license);
      const statusIndex = item.serveStatus.indexOf(this.carStatus);
      if (telIndex > -1 && licenseIndex > -1 && statusIndex > -1) {
        this.searchList.push(item);
      }
    });
  }

  onReset() {
    this.tel = '';
    this.license = '';
    this.carStatus = '';
    this.searchList = this.dataSet;
  }

  onChange(event) {
    this.dataSet.forEach(item => {
      if (event === item.link) {
        if (item.serveStatus === '正常') {
          item.serveStatus = '黑名单';
          item.status = '移除黑名单';
        } else {
          item.serveStatus = '正常';
          item.status = '加入黑名单';
        }
      }
    });
  }

  constructor() { }

}
